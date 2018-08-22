import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { IPizzaFormInterface } from './pizza-form.interface';
import { PizzaFormService } from './pizza-form.service';

@Component({
  selector: 'app-pizza-form-container',
  templateUrl: './pizza-form-container.component.html',
  styleUrls: ['./pizza-form-container.component.scss'],
  providers: [PizzaFormService]
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
    private pizzaFormService: PizzaFormService
  ) { }

  ngOnInit() {
    if (this.editMode) {
      const demoData: IPizzaFormInterface = {} as any;

      this.pizzaFormService.loadForEdit(demoData);
    } else {
      this.pizzaFormService.addPizza();
    }
  }

  async submit(data: IPizzaFormInterface) {
    if (!this.pizzaFormService.isValid) {
      return;
    }

    // send data to server
  }

  onPizzaAdd() {
    this.pizzaFormService.addPizza();
  }

  onPizzaDelete(index: number) {
    this.pizzaFormService.deletePizza(index);
  }

  onPizzaSelected(index: number) {
    this.pizzaFormService.selectPizzaForEdit(index);
  }
}
