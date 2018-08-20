import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPizzaViewerComponent } from './selected-pizza-viewer.component';

describe('SelectedPizzaViewerComponent', () => {
  let component: SelectedPizzaViewerComponent;
  let fixture: ComponentFixture<SelectedPizzaViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedPizzaViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedPizzaViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
