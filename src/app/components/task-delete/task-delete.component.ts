import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css'],
})
export class TaskDeleteComponent {
  id = this.actRoute.snapshot.params['id'];
  taskData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit() {
    this.loadTaskDetail();
  }

  loadTaskDetail() {
    this.restApi.getTask(this.id).subscribe((data: {}) => {
      this.taskData = data;
    });
  }

  deleteTask(id: number) {
    if (window.confirm('Tem certeza que deseja deletar?')) {
      this.restApi.deleteTask(id).subscribe((data) => {
        this.router.navigate(['/home']);
      });
    }
  }
}
