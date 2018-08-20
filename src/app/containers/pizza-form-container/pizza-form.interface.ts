export interface IPizzaFormInterface {
  pizzas: IPizzaItem[];
  customerDetails: ICustomerDetails;
}

export interface IPizzaItem {
  size: PizzaSizeEnum;
  toppings: PizzaToppingsEnum[];
  name: string;
  crunchType: 'normal' | 'cheeseFilling' | 'thick';
}

export interface ICustomerDetails {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: {
    street: string;
    houseNum: string;
    city: string;
    floor: number;
  };
}

export enum PizzaSizeEnum {
  SMALL = 1,
  MEDIUM = 2,
  LARGE = 3
}

export enum PizzaToppingsEnum {
  PAPPERONI = 1,
  OLIVES = 2,
  SALAMI = 3,
  CORN = 4,
  ONIONS = 5,
  MUSHROOMS = 6,
  BACON = 7
}

