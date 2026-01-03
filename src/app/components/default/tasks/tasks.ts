import { Component, computed, input } from '@angular/core';
import { User } from '../../../types/user';
import { TaskComponent } from "./task/task";
import { Task } from '../../../types/task';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  public readonly user = input.required<User>();
  public readonly tasks = input.required<Task[] | undefined>();

  public readonly hasTasks = computed(() => (this.tasks()?.length ?? 0) > 0);
}
