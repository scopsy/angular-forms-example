import { Injectable } from '@angular/core';
import { IPizzaFormInterface, IToppingItem, PizzaToppingsEnum } from './pizza-form.interface';
import { PizzaFormService } from './pizza-form.service';

@Injectable()
export class PizzaLoaderService {

  constructor(
    private pizzaFormService: PizzaFormService
  ) {

  }

  loadPizzaForEdit(data: IPizzaFormInterface): void {
    this.pizzaFormService.form.patchValue({
      customerDetails: {
        ...data.customerDetails
      }
    });

    for (const pizza of data.pizzas) {
      const group = this.pizzaFormService.addPizza();
      group.patchValue({
        size: pizza.size,
        toppings: this.prefillToppingsSelection(group.get('toppings').value, pizza.toppings as PizzaToppingsEnum[])
      });
    }
  }

  prefillToppingsSelection(toppings: IToppingItem[], selectedToppings: PizzaToppingsEnum[]): IToppingItem[] {
    return toppings.map((i) => {
      if (selectedToppings.includes(i.name)) {
        i.selected = true;
      }

      return i;
    });
  }
}
