import { TestBed, inject } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_MODULE_DECLARATIONS, APP_MODULE_IMPORTS } from '../../../app.module.deps';
import { PizzaFormValidatorsService } from './pizza-form-validators.service';

import { PizzaFormService } from './pizza-form.service';
import { PizzaLoaderService } from './pizza-loader.service';

describe('PizzaFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [...APP_MODULE_DECLARATIONS],
      imports: [...APP_MODULE_IMPORTS],
      providers: [PizzaFormService, PizzaLoaderService, PizzaFormValidatorsService]
    });
  });

  it('should be created', inject([PizzaFormService], (service: PizzaFormService) => {
    expect(service).toBeTruthy();
  }));
});
