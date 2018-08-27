import { inject, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PizzaFormValidatorsService } from './pizza-form-validators.service';
import { PizzaToppingsEnum } from './pizza-form.interface';
import { PizzaFormService } from './pizza-form.service';

import { PizzaLoaderService } from './pizza-loader.service';

describe('PizzaLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      providers: [PizzaLoaderService, PizzaFormService, PizzaFormValidatorsService]
    });
  });

  it('should change selected state of selected items', inject([PizzaLoaderService], (service: PizzaLoaderService) => {
    const TOPPINGS_DATA = [{
      selected: false,
      name: PizzaToppingsEnum.OLIVES
    }, {
      selected: false,
      name: PizzaToppingsEnum.MUSHROOMS
    }, {
      selected: false,
      name: PizzaToppingsEnum.HAM
    }];

    const result = service.prefillToppingsSelection(TOPPINGS_DATA, [PizzaToppingsEnum.MUSHROOMS, PizzaToppingsEnum.HAM]);
    expect(result[0].selected).toBe(false);
    expect(result[2].selected).toBe(true);
  }));
});
