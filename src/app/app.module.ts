import { MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaFormContainerComponent } from './containers/pizza-form-container/pizza-form-container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SelectedPizzaViewerComponent } from './components/selected-pizza-viewer/selected-pizza-viewer.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { PizzaListItemComponent } from './components/pizza-list-item/pizza-list-item.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaFormContainerComponent,
    NavbarComponent,
    SelectedPizzaViewerComponent,
    PizzaListComponent,
    PizzaListItemComponent,
    CustomerDetailsComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
