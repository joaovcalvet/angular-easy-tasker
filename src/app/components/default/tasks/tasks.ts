import { Component, input } from '@angular/core';
import { User } from '../../../types/user';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  public readonly user = input.required<User | undefined>();
}
