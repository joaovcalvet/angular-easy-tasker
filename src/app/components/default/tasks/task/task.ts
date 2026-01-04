import { Component, input, output } from '@angular/core';
import { Task } from '../../../../models/task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  public readonly task = input.required<Task>();

  public complete = output<string>();

  public onComplete() {
    this.complete.emit(this.task().id);
  } 
}
