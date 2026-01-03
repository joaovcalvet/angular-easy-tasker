import { Component, input } from '@angular/core';
import { User } from '../../../types/user';
import { TaskComponent } from "./task/task";

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  public readonly user = input.required<User>();
}
