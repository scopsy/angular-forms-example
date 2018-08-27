import { inject, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PizzaFormValidatorsService } from './pizza-form-validators.service';
import { IPizzaFormInterface, PizzaSizeEnum, PizzaToppingsEnum } from './pizza-form.interface';

import { PizzaFormService } from './pizza-form.service';
import { PizzaLoaderService } from './pizza-loader.service';

describe('PizzaFormService', () => {
  let pizzaFormService: PizzaFormService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      providers: [PizzaFormService, PizzaLoaderService, PizzaFormValidatorsService]
    });
  });

  beforeEach(inject([PizzaFormService], (service: PizzaFormService) => {
    pizzaFormService = service;
  }));

  describe('Service initialization', () => {
    it('should initialize a form group when class gets constructed', function () {
      expect(pizzaFormService.form instanceof FormGroup).toEqual(true);
    });

    it('should initialize form properly', () => {
      expect(pizzaFormService.form.get('pizzas').value.length).toBe(0);
      expect(pizzaFormService.form.get('selectedPizza').value).toBeNull();
      expect(pizzaFormService.form.valid).toEqual(false);
    });
  });

  describe('Service behaviour', () => {
    it('should calculate if the form is valid', () => {
      pizzaFormService.form = new FormGroup({
        name: new FormControl('', Validators.required)
      });
      expect(pizzaFormService.isValid).toBe(false);
      pizzaFormService.form.get('name').setValue('test');

      expect(pizzaFormService.isValid).toBe(true);
    });

    it('should add pizza for the pizzas array', function () {
      expect(pizzaFormService.form.get('pizzas').value.length).toEqual(0);
      pizzaFormService.addPizza();
      expect(pizzaFormService.form.get('pizzas').value.length).toEqual(1);
    });

    it('should mark the form as dirty after pizza added', function () {
      expect(pizzaFormService.form.dirty).toEqual(false);
      pizzaFormService.addPizza();
      expect(pizzaFormService.form.dirty).toEqual(true);
    });

    it('should select a pizza for edit mode', () => {
      pizzaFormService.addPizza();
      pizzaFormService.addPizza();

      pizzaFormService.selectPizzaForEdit(0);
      expect(pizzaFormService.form.get('selectedPizza').value).toEqual(0);
    });

    it('should delete an added pizza', function () {
      pizzaFormService.addPizza();
      expect(pizzaFormService.form.get('pizzas').value.length).toEqual(1);
      pizzaFormService.deletePizza(0);
      expect(pizzaFormService.form.get('pizzas').value.length).toEqual(0);
    });

    describe('Pizza Dto construction', () => {
      let demoData: IPizzaFormInterface;
      beforeEach(() => {
        demoData = {
          pizzas: [{
            toppings: [{
              selected: false,
              name: PizzaToppingsEnum.PEPPERONI
            }, {
              selected: true,
              name: PizzaToppingsEnum.HAM
            }, {
              selected: true,
              name: PizzaToppingsEnum.OLIVES
            }],
            size: PizzaSizeEnum.MEDIUM
          }],
          customerDetails: {
            phoneNumber: '123'
          }
        } as any;
      });

      it('should create a pizza dto from a data object', function () {
        const constructedData = pizzaFormService.createPizzaOrderDto(demoData);
        expect(constructedData.pizzas.length).toEqual(1);
        expect(constructedData.customerDetails.phoneNumber).toEqual('123');
      });

      it('should extract selected toppings only', function () {
        const constructedData = pizzaFormService.createPizzaOrderDto(demoData);
        expect(constructedData.pizzas[0].toppings.length).toEqual(2);
      });

      it('should convert topping data structure to enum array', function () {
        const constructedData = pizzaFormService.createPizzaOrderDto(demoData);
        expect(constructedData.pizzas[0].toppings[0]).toEqual(PizzaToppingsEnum.HAM);
      });
    });

    it('should return only selected toppings', function () {
      const selectedToppings = pizzaFormService.getSelectedToppings([{
        name: PizzaToppingsEnum.OLIVES,
        selected: false
      }, {
        name: PizzaToppingsEnum.HAM,
        selected: true
      }, {
        name: PizzaToppingsEnum.PEPPERONI,
        selected: false
      }]);

      expect(selectedToppings.length).toEqual(1);
      expect(selectedToppings[0].name).toEqual(PizzaToppingsEnum.HAM);
    });
  });
});
