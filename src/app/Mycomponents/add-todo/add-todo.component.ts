import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/todo/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {


  title!:string
  desc!:string
  @Output() addtodo = new EventEmitter<Todo>();
  
  constructor() { 

  }
  ngOnInit(): void {
  }

  // showvalues(){
  //   const todo={
  //     sno:8,
  //     title:this.title,
  //     desc: this.desc,
  //     active: true
  //   }

  //   this.addtodo.emit(todo)
  // }

  todoadder(val:any){
    if(val.title == undefined || val.desc == undefined){
      alert('Please enter some value')
    }
    else{
      let id=Math.floor(Math.random()*100)
      const todo={
      sno:id,
      title:val.title,
      desc:val.desc,
      active: true
      }
      console.log(todo)
      this.addtodo.emit(todo)
      
    }
  }


}
