import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSizePickerComponent } from './pizza-size-picker.component';

describe('PizzaSizePickerComponent', () => {
  let component: PizzaSizePickerComponent;
  let fixture: ComponentFixture<PizzaSizePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaSizePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaSizePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
