import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/legacy/header/header.component';
import { UserComponent } from './components/default/user/user';
import { TasksComponent } from './components/default/tasks/tasks';

import { User } from './models/user';
import { Task } from './models/task';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly users = DUMMY_USERS;

  protected readonly selectedUser = signal<User | undefined>(undefined);

  protected onUserSelected(userId: string): void {
    const user = this.users.find(user => user.id === userId);

    this.selectedUser.set(user);
  }
}
