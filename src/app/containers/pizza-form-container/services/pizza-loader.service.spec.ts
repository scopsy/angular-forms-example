import { TestBed, inject } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_MODULE_IMPORTS } from '../../../app.module.deps';
import { PizzaFormService } from './pizza-form.service';

import { PizzaLoaderService } from './pizza-loader.service';

describe('PizzaLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [...APP_MODULE_IMPORTS],
      providers: [PizzaLoaderService, PizzaFormService]
    });
  });

  it('should be created', inject([PizzaLoaderService], (service: PizzaLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
