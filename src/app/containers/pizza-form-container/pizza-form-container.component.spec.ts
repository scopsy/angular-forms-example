import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaFormContainerComponent } from './pizza-form-container.component';

describe('PizzaFormContainerComponent', () => {
  let component: PizzaFormContainerComponent;
  let fixture: ComponentFixture<PizzaFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaFormContainerComponent ]
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
