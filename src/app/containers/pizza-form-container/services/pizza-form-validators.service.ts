import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { IToppingItem, PizzaSizeEnum } from './pizza-form.interface';

@Injectable()
export class PizzaFormValidatorsService {

  constructor() { }

  formValidator(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const errors: ValidationErrors = {};

      if (!(control.get('pizzas') as FormArray).length) {
        errors.noPizzas = {
          message: 'You must select at least one pizza to order'
        };
      }

      return Object.keys(errors).length ? errors : null;
    };
  }

  pizzaItemValidator(): ValidatorFn {
    return (control: FormGroup): ValidationErrors | null => {
      const errors: ValidationErrors = {};

      const pizzaSize: PizzaSizeEnum = control.get('size').value;
      const pizzaToppings: IToppingItem[] = control.get('toppings').value.filter(i => i.selected);

      if (pizzaSize !== PizzaSizeEnum.LARGE && pizzaToppings.length > 4) {
        errors.toppingPizzaSize = {
          message: 'To use more then 4 toppings you must selected large pizza'
        };
      }

      return Object.keys(errors).length ? errors : null;
    };
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);

      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
