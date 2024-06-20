import { Component } from '@angular/core';
import { AppbarComponent } from '../appbar/appbar.component';
import { InputComponent } from '../input/input.component';
import { ListtaskComponent } from '../listtask/listtask.component';
import { Task } from '../../Interface/task';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppbarComponent,InputComponent,ListtaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
taskslist:Task[]=[]

  getTasks($event: Task[]){
    this.taskslist = $event
    console.log(this.taskslist)
  }
}
