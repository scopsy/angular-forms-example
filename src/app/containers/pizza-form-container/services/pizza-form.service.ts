import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PizzaFormValidatorsService } from './pizza-form-validators.service';
import { IPizzaFormInterface, IToppingItem, PizzaSizeEnum, PizzaToppingsEnum } from './pizza-form.interface';

@Injectable()
export class PizzaFormService {
  public availableToppings = [...Object.values(PizzaToppingsEnum)];
  public form: FormGroup;
  public get pizzasArray(): FormArray {
    return this.form.get('pizzas') as FormArray;
  }

  public get isValid(): boolean {
    if (!this.form.valid) {
      this.pizzaValidatorsService.validateAllFormFields(this.form);
      return false;
    }

    return true;
  }

  constructor(
    private pizzaValidatorsService: PizzaFormValidatorsService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      selectedPizza: [],
      pizzas: this.fb.array([]),
      customerDetails: this.customerDetailsFormGroup
    }, {
      validator: this.pizzaValidatorsService.formValidator()
    });
  }

  selectPizzaForEdit(index: number) {
    this.form.get('selectedPizza').setValue(index);
  }

  addPizza(): FormGroup {
    const group = this.getPizzaFormGroup();
    this.pizzasArray.push(group);

    this.selectPizzaForEdit(this.pizzasArray.length - 1);
    this.form.markAsDirty();

    return group;
  }

  deletePizza(index: number) {
    this.pizzasArray.removeAt(index);
    this.form.markAsDirty();
  }

  getPizzaFormGroup(size: PizzaSizeEnum = PizzaSizeEnum.MEDIUM): FormGroup {
    const group = this.fb.group({
      size: [size],
      toppings: this.mapArrayToGroup(this.availableToppings)
    }, {
      validator: this.pizzaValidatorsService.pizzaItemValidator()
    });

    return group;
  }

  /**
   * Creates a pizza DTO Object using the server pizza interface
   * In this example it is the same except the toppings array,
   * so for simplicity i used the same interface,
   * usually the return object will be of different type
   */
  createPizzaOrderDto(data: IPizzaFormInterface): IPizzaFormInterface {
    const order = {
      customerDetails: data.customerDetails,
      pizzas: data.pizzas
    };

    for (const pizza of order.pizzas) {
      pizza.toppings = this.getSelectedToppings(pizza.toppings as IToppingItem[])
        .map((i) => {
          return i.name;
        });
    }

    return order;
  }

  getSelectedToppings(toppings: IToppingItem[]): IToppingItem[] {
    return toppings.filter(i => i.selected);
  }

  private mapArrayToGroup(data: string[]): FormArray {
    return this.fb.array(data.map((i) => {
      return this.fb.group({
        name: i,
        selected: false
      });
    }));
  }

  private get customerDetailsFormGroup(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: this.fb.group({
        street: ['', Validators.required],
        houseNum: ['', Validators.required],
        city: ['', Validators.required],
        floor: ['', Validators.required],
      })
    });
  }
}
