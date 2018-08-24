import { TestBed, inject } from '@angular/core/testing';
import { APP_MODULE_IMPORTS } from '../../../app.module.deps';

import { PizzaFormValidatorsService } from './pizza-form-validators.service';

describe('PizzaFormValidatorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...APP_MODULE_IMPORTS],
      providers: [PizzaFormValidatorsService]
    });
  });

  it('should be created', inject([PizzaFormValidatorsService], (service: PizzaFormValidatorsService) => {
    expect(service).toBeTruthy();
  }));
});
