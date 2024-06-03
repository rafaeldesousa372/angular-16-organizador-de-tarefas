import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TaskDeleteComponent } from './task-delete.component';
import { Router } from '@angular/router';

describe('TaskDeleteComponent', () => {
  let component: TaskDeleteComponent;
  let fixture: ComponentFixture<TaskDeleteComponent>;
  let httpTestingController: HttpTestingController;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [TaskDeleteComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(TaskDeleteComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate deleteTask', () => {
    window.confirm('sim');
    let id = 123;
    let test = component.deleteTask(id);
    expect(test).not.toBeNull();
  });

  it('should validade navigate route', () => {
    const navigateSpy = spyOn(router, 'navigate');
    let id = 123;
    component.deleteTask(id);
    expect(navigateSpy).not.toBeFalse();
  });
});
