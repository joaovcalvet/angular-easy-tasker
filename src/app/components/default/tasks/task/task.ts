import { Component, input } from '@angular/core';
import { Task } from '../../../../types/task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  public readonly task = input.required<Task>();
}
