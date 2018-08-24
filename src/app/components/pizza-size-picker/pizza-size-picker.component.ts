import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PizzaSizeEnum } from '../../containers/pizza-form-container/services/pizza-form.interface';

@Component({
  selector: 'app-pizza-size-picker',
  templateUrl: './pizza-size-picker.component.html',
  styleUrls: ['./pizza-size-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PizzaSizePickerComponent),
      multi: true
    }
  ]
})
export class PizzaSizePickerComponent implements ControlValueAccessor {
  pizzaSize: PizzaSizeEnum;
  PizzaSizeEnum = PizzaSizeEnum;

  constructor() { }

  changeSize(size: PizzaSizeEnum) {
    this.pizzaSize = size;
    this.propagateChange(size);
  }

  propagateChange = (value: PizzaSizeEnum) => {};
  writeValue(value: PizzaSizeEnum) {
    this.pizzaSize = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
