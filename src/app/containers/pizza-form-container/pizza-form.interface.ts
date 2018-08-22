export interface IPizzaFormInterface {
  pizzas: IPizzaItem[];
  customerDetails: ICustomerDetails;
}

export interface IPizzaItem {
  size: PizzaSizeEnum;
  toppings: {
    name: string;
    selected: boolean;
  }[];
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
