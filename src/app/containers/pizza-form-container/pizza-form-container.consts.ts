import { PizzaFormValidatorsService } from './services/pizza-form-validators.service';
import { PizzaFormService } from './services/pizza-form.service';
import { PizzaLoaderService } from './services/pizza-loader.service';

export const PIZZA_FORM_PROVIDERS = [
  PizzaFormService,
  PizzaFormValidatorsService,
  PizzaLoaderService
];
