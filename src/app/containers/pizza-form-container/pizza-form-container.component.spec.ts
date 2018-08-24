import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_MODULE_DECLARATIONS, APP_MODULE_IMPORTS } from '../../app.module.deps';

import { PizzaFormContainerComponent } from './pizza-form-container.component';

describe('PizzaFormContainerComponent', () => {
  let component: PizzaFormContainerComponent;
  let fixture: ComponentFixture<PizzaFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...APP_MODULE_IMPORTS],
      declarations: [ ...APP_MODULE_DECLARATIONS ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
