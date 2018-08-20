import { Component, OnInit } from '@angular/core';
import { PizzaFormService } from './pizza-form.service';

@Component({
  selector: 'app-pizza-form-container',
  templateUrl: './pizza-form-container.component.html',
  styleUrls: ['./pizza-form-container.component.scss'],
  providers: [PizzaFormService]
})
export class PizzaFormContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
