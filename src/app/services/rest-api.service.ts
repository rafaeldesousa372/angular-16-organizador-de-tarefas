import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Task } from '../shared/model/task';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getTasks(): Observable<Task> {
    return this.http
      .get<Task>(this.apiURL + '/created-task')
      .pipe(retry(1), catchError(this.handleError));
  }

  getTask(id: any): Observable<Task> {
    return this.http
      .get<Task>(this.apiURL + '/created-task/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  createTask(task: any): Observable<Task> {
    return this.http
      .post<Task>(
        this.apiURL + '/created-task',
        JSON.stringify(task),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updateTask(id: any, task: any): Observable<Task> {
    return this.http
      .put<Task>(
        this.apiURL + '/created-task/' + id,
        JSON.stringify(task),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteTask(id: number) {
    return this.http
      .delete<Task>(this.apiURL + '/created-task/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
