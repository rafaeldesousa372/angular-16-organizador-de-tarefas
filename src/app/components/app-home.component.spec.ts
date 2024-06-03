import { TestBed } from '@angular/core/testing';
import { AppHomeComponent } from '../components/app-home.component'

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: [AppHomeComponent],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppHomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
