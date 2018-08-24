import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';
import { IPizzaItem, IToppingItem, PizzaSizeEnum } from '../../containers/pizza-form-container/services/pizza-form.interface';
import { PizzaFormService } from '../../containers/pizza-form-container/services/pizza-form.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  @Input() group: FormGroup;

  @Output() deletePizza = new EventEmitter<number>();
  @Output() addPizza = new EventEmitter();
  @Output() pizzaSelected = new EventEmitter<number>();

  get pizzasArray(): FormArray {
    return this.group.get('pizzas') as FormArray;
  }

  constructor(
    private pizzaFormService: PizzaFormService
  ) { }

  ngOnInit() {
  }

  getPizzaListItemClassStates(pizza: AbstractControl, index: number) {
    return {
      'PizzaList__item--active': this.group.get('selectedPizza').value === index,
      'PizzaList__item--has-error': !pizza.valid && pizza.dirty
    };
  }

  getPizzaTitle(pizza: IPizzaItem): string {
    const selectedToppings = this.pizzaFormService
      .getSelectedToppings((pizza.toppings as IToppingItem[]))
      .map(i => i.name);

    const toppingsString = this.getToppingsString(selectedToppings);
    const sizeString = this.getPizzaSizeTitle(pizza.size);

    return `${sizeString} pizza ${toppingsString}`;
  }

  private getToppingsString(toppings: string[]): string {
    if (!toppings || !toppings.length) return '';

    return `- ${toppings.toString()}`;
  }

  private getPizzaSizeTitle(size: PizzaSizeEnum): string {
    let pizzaSize;
    switch (size) {
      case PizzaSizeEnum.SMALL:
        pizzaSize = 'S';
        break;
      case PizzaSizeEnum.MEDIUM:
        pizzaSize = 'M';
        break;
      case PizzaSizeEnum.LARGE:
        pizzaSize = 'L';
        break;
    }

    return pizzaSize;
  }

}
