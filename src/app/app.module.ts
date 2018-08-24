import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { APP_MODULE_DECLARATIONS, APP_MODULE_IMPORTS } from './app.module.dependencies';

@NgModule({
  declarations: [...APP_MODULE_DECLARATIONS],
  imports: [...APP_MODULE_IMPORTS],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
