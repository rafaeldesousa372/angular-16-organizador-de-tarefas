import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { TasksRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TaskCreateComponent } from './components/task-create/task-create.component';
import { TaskEditComponent } from './components/task-edit/task-edit.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskCreateComponent,
    TaskEditComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TasksRoutingModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
