import { TestBed, inject } from '@angular/core/testing';
import { FormArray, FormGroup, ValidatorFn } from '@angular/forms';
import { AppModule } from '../../../app.module';

import { PizzaFormValidatorsService } from './pizza-form-validators.service';

describe('PizzaFormValidatorsService', () => {
  let validatorService: PizzaFormValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [PizzaFormValidatorsService]
    });
  });

  beforeEach(inject([PizzaFormValidatorsService], (service: PizzaFormValidatorsService) => {
    validatorService = service;
  }));

  describe('Form Validator', () => {
    let formValidator: ValidatorFn;
    beforeEach(() => {
      formValidator = validatorService.formValidator();
    });

    it('should return error when there is no pizza', () => {
      const result = formValidator(new FormGroup({
        pizzas: new FormArray([])
      }));

      expect(result.noPizzas).toBeTruthy();
    });

    it('should not return error when pizzas exist', () => {
      const result = formValidator(new FormGroup({
        pizzas: new FormArray([
          new FormGroup({})
        ])
      }));

      expect(result).toBe(null);
    });
  });
});
