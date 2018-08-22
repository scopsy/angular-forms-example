import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ValidateFn } from '../../../../node_modules/codelyzer/walkerFactory/walkerFn';
import { IPizzaFormInterface, PizzaSizeEnum } from './pizza-form.interface';

@Injectable()
export class PizzaFormService {
  public availableToppings = ['Sausage', 'Pepperoni', 'Ham', 'Olives', 'Bacon', 'Corn', 'Pineapple', 'Mushrooms'];
  public form: FormGroup;
  public get pizzasArray(): FormArray {
    return this.form.get('pizzas') as FormArray;
  }

  public get isValid(): boolean {
    if (!this.form.valid) {
      this.validateAllFormFields(this.form);
      return false;
    }

    return true;
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      selectedPizza: [],
      pizzas: this.fb.array([]),
      customerDetails: this.customerDetailsFormGroup
    }, {
      validator: this.formValidator
    });
  }

  selectPizzaForEdit(index: number) {
    this.form.get('selectedPizza').setValue(index);
  }

  formValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
    const errors: ValidationErrors = {};

    if (!(control.get('pizzas') as FormArray).length) {
      errors.noPizzas = true;
    }

    return Object.keys(errors).length ? errors : null;
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

  addPizza() {
    this.pizzasArray.push(this.getPizzaFormGroup());
    this.selectPizzaForEdit(this.pizzasArray.length - 1);
    this.form.markAsDirty();
  }

  deletePizza(index: number) {
    this.pizzasArray.removeAt(index);
    this.form.markAsDirty();
  }

  getPizzaFormGroup(size: PizzaSizeEnum = PizzaSizeEnum.MEDIUM): FormGroup {
    const group = this.fb.group({
      size: [size],
      toppings: this.mapArrayToGroup(this.availableToppings),
      name: [''],
      crunchType: ['normal']
    });

    return group;
  }

  loadForEdit(data: IPizzaFormInterface): void {
    this.form.patchValue({
      ...data
    });
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
