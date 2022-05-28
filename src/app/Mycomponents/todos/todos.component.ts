import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo/todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localitem!: string|null;
  todos:Todo[]
  constructor() {
    this.localitem = localStorage.getItem('todos')
    if (this.localitem == null){
      this.todos=[]
    }
    else{
      this.todos = JSON.parse(this.localitem)
    }
   }

  ngOnInit(): void {
  }

  delTodo(todo:Todo){
    let index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }
  addtodo(todo:Todo){
    this.todos.push(todo)
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }
}
