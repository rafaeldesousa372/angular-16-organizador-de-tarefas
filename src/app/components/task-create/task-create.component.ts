import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css'],
})
export class TaskCreateComponent {
  @Input() taskDetails = { name: '', description: '', contact: '' }

  constructor(public restApi: RestApiService, public router: Router) {}

  ngOnInit() {}

  addTask() {
    this.restApi.createTask(this.taskDetails).subscribe((data: {}) => {
      this.router.navigate(['/task-list']);
    });
  }
}
