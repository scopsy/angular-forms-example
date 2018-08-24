import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_MODULE_DECLARATIONS, APP_MODULE_IMPORTS } from '../../app.module.deps';

import { SelectedPizzaViewerComponent } from './selected-pizza-viewer.component';

describe('SelectedPizzaViewerComponent', () => {
  let component: SelectedPizzaViewerComponent;
  let fixture: ComponentFixture<SelectedPizzaViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...APP_MODULE_IMPORTS],
      declarations: [ ...APP_MODULE_DECLARATIONS ]
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
