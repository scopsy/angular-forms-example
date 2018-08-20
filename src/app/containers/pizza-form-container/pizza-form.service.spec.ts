import { TestBed, inject } from '@angular/core/testing';

import { PizzaFormService } from './pizza-form.service';

describe('PizzaFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PizzaFormService]
    });
  });

  it('should be created', inject([PizzaFormService], (service: PizzaFormService) => {
    expect(service).toBeTruthy();
  }));
});
