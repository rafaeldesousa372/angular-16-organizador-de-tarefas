import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css'],
})
export class TaskEditComponent {
  id = this.actRoute.snapshot.params['id'];
  taskData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.editTask();
  }

  editTask() {
    this.restApi.getTask(this.id).subscribe((data: {}) => {
      this.taskData = data;
    });
  }

  updateTask() {
    if (window.confirm('Tem certeza que deseja atualizar?')) {
      this.restApi.updateTask(this.id, this.taskData).subscribe((data) => {
        this.router.navigate(['/home']);
      });
    }
  }
}
