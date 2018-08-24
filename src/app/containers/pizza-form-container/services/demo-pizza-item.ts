import { IPizzaFormInterface, PizzaSizeEnum, PizzaToppingsEnum } from './pizza-form.interface';

export const DEMO_PIZZA: IPizzaFormInterface = {
  customerDetails: {
    address: {
      floor: 1,
      street: 'Test street',
      houseNum: '44',
      city: 'New York'
    },
    lastName: 'Lover',
    firstName: 'Pizza',
    phoneNumber: '100100100',
  },
  pizzas: [{
    toppings: [PizzaToppingsEnum.BACON, PizzaToppingsEnum.MUSHROOMS, PizzaToppingsEnum.OLIVES] as any,
    size: PizzaSizeEnum.MEDIUM
  }]
};
