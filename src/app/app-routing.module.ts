import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component'; 
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskCreateComponent } from '../app/components/task-create/task-create.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'app-task-create' },
    { path: 'task-create', component: TaskCreateComponent },
    { path: 'task-list', component: TaskListComponent },
    { path: 'task-e-edit/:id', component: TaskEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }