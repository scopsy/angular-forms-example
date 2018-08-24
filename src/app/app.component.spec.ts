import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { APP_MODULE_DECLARATIONS, APP_MODULE_IMPORTS } from './app.module.dependencies';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [...APP_MODULE_IMPORTS],
      declarations: [
        ...APP_MODULE_DECLARATIONS
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'angular-forms-example'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-forms-example');
  }));

/*  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-forms-example!');
  }));*/
});
