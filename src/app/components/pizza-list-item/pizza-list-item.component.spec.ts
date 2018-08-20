import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaListItemComponent } from './pizza-list-item.component';

describe('PizzaListItemComponent', () => {
  let component: PizzaListItemComponent;
  let fixture: ComponentFixture<PizzaListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
