import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todo/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo = new Todo;
  @Output() deletetodo = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {
  }

  getitem(todo:Todo){
    this.deletetodo.emit(todo)
    console.log(todo)
  }

}
