import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { AppHomeComponent } from '../components/app-home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';

describe('AppHomeComponent', () => {
  let component: AppHomeComponent;
  let fixture: ComponentFixture<AppHomeComponent>;
  let httpTestingController: HttpTestingController;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [AppHomeComponent, TaskListComponent],
    });
    fixture = TestBed.createComponent(AppHomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create the app-home', () => {
    const fixture = TestBed.createComponent(AppHomeComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
