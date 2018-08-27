import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { DEMO_PIZZA } from './services/demo-pizza-item';
import { PizzaFormValidatorsService } from './services/pizza-form-validators.service';
import { IPizzaFormInterface } from './services/pizza-form.interface';
import { PizzaFormService } from './services/pizza-form.service';
import { PizzaLoaderService } from './services/pizza-loader.service';

@Component({
  selector: 'app-pizza-form-container',
  templateUrl: './pizza-form-container.component.html',
  styleUrls: ['./pizza-form-container.component.scss'],
  providers: [
    PizzaFormService,
    PizzaFormValidatorsService,
    PizzaLoaderService
  ]
})
export class PizzaFormContainerComponent implements OnInit {
  editMode = false;
  get form(): FormGroup {
    return this.pizzaFormService.form;
  }

  get selectedPizzaGroup(): AbstractControl {
    if (!this.pizzaFormService.pizzasArray.length) return;

    return this.pizzaFormService.pizzasArray.at(this.form.get('selectedPizza').value);
  }

  constructor(
    private pizzaLoaderService: PizzaLoaderService,
    private pizzaFormService: PizzaFormService
  ) { }

  ngOnInit() {
    // here you can check the page url if a pizza order id was specified
    // and load it from the server
    if (this.editMode) {
      this.pizzaLoaderService.loadPizzaForEdit(DEMO_PIZZA);
    }
  }

  async submit(data: IPizzaFormInterface) {
    if (!this.pizzaFormService.isValid) {
      return;
    }

    const order: IPizzaFormInterface = this.pizzaFormService.createPizzaOrderDto(data);

    alert(`Thanks ${order.customerDetails.firstName}, the pizza is on the way!`);

    if (this.editMode) {
      // update api endpoint call
    } else {
      // create api endpoint call
    }
  }

  reset() {
    this.pizzaFormService.resetForm();
  }

  onPizzaAdd() {
    this.pizzaFormService.addPizza();
    this.pizzaFormService.selectPizzaForEdit(this.pizzaFormService.pizzasArray.length - 1);
  }

  onPizzaDelete(index: number) {
    this.pizzaFormService.deletePizza(index);
  }

  onPizzaSelected(index: number) {
    this.pizzaFormService.selectPizzaForEdit(index);
  }
}
