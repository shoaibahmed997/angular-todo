import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import { TodoItemComponent } from './Mycomponents/todo-item/todo-item.component';
import { AddTodoComponent } from './Mycomponents/add-todo/add-todo.component';
import {FormsModule} from '@angular/forms' 

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
