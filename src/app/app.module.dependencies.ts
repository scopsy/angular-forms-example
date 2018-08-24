import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaFormContainerComponent } from './containers/pizza-form-container/pizza-form-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SelectedPizzaViewerComponent } from './components/selected-pizza-viewer/selected-pizza-viewer.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { PizzaSizePickerComponent } from './components/pizza-size-picker/pizza-size-picker.component';


export const APP_MODULE_DECLARATIONS = [
  AppComponent,
  PizzaFormContainerComponent,
  NavbarComponent,
  SelectedPizzaViewerComponent,
  PizzaListComponent,
  CustomerDetailsComponent,
  PizzaSizePickerComponent
];

export const APP_MODULE_IMPORTS = [
  ReactiveFormsModule,
  FormsModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCheckboxModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  BrowserModule,
  BrowserAnimationsModule
];
