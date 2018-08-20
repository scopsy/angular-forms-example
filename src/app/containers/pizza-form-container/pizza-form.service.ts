import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PizzaSizeEnum } from './pizza-form.interface';

@Injectable()
export class PizzaFormService {
  public form: FormGroup;
  public get pizzasArray(): FormArray {
    return this.form.get('pizzas') as FormArray;
  }

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      pizzas: this.fb.array([]),
      customerDetails: this.customerDetailsFormGroup
    });
  }

  addPizza() {
    this.pizzasArray.push(this.getPizzaFormGroup());
  }

  getPizzaFormGroup(size: PizzaSizeEnum = PizzaSizeEnum.MEDIUM): FormGroup {
    const group = this.fb.group({
      size: [size],
      toppings: [],
      name: [''],
      crunchType: ['normal']
    });

    return group;
  }

  private get customerDetailsFormGroup(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      address: this.fb.group({
        street: [''],
        houseNum: [''],
        city: [''],
        floor: ['']
      })
    });
  }
}
