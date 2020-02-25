import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    // load component with a fake module
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HeaderComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    // instantiate component
    const fixture = TestBed.createComponent(AppComponent);
    // get instance
    const app = fixture.debugElement.componentInstance;
    // tests
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ng-app-sample'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ng-app-sample');
  });

  it('should render title', () => {
    // create instance
    const fixture = TestBed.createComponent(AppComponent);
    // check component ready
    fixture.detectChanges();
    // get DOM
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#footer').textContent).toContain('2020');
  });

  it('should calculate value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    const wantedRes = 4;
    const res = app.add(1, 3);
    expect(res).toEqual(wantedRes);
    // expect(app.add(1, 3)).toEqual(4);
  });
});
