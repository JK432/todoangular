import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Interface/task';


@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  constructor(public formmodule:FormsModule){}
  Tasks:Task[]=[];
  newtask:Task = {name:""}

  @Output() outEvent = new EventEmitter<Task[]>();

  addTask(){
    if(this.newtask.name.trim()!=""){
      this.newtask.name = this.newtask.name.trim();
      this.Tasks.push(this.newtask);
      this.newtask = <Task>{
        name: "",
      };
    }
    this.sendTasks()
    console.log(this.Tasks)
  }

  sendTasks() {
    this.outEvent.emit(this.Tasks);
  }


}

