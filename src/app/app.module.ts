import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TasksRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDeleteComponent } from './components/task-delete/task-delete.component';
import { LoginComponent } from './login/login/login.component';
import { AppHomeComponent } from './components/app-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    TaskCreateComponent,
    TaskEditComponent,
    TaskListComponent,
    TaskDeleteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TasksRoutingModule,
    FormsModule,
    ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
