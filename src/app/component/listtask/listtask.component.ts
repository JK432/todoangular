import { Component,Input} from '@angular/core';
import { Task } from '../../Interface/task';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-listtask',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listtask.component.html',
  styleUrl: './listtask.component.css'
})
export class ListtaskComponent {


  @Input() tasks: Task[] = [];

  ngOnChanges(): void {
    console.log('List changed:', this.tasks);
  }

  deletetask(index:number){
    this.tasks.splice(index, 1);
  }
}
