import { Component, OnInit } from '@angular/core';

import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  Tasks: any = [];

  constructor(public restApi: RestApiService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    return this.restApi.getTasks().subscribe((data: {}) => {
      this.Tasks = data;
    });
  }

  deleteTask(id: number) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteTask(id).subscribe((data) => {
        this.loadTasks();
      });
    }
  }
}
