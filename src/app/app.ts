import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/legacy/header/header.component';
import { UserComponent } from './components/default/user/user';
import { TasksComponent } from './components/default/tasks/tasks';

import { User } from './models/user';
import { Task } from './models/task';
import { DUMMY_USERS } from './dummy-users';

const DUMMY_TASKS: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Task 1',
      summary: 'Summary 1',
      dueDate: new Date(),
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Task 2',
      summary: 'Summary 2',
      dueDate: new Date(),
    },
    {
      id: 't3',
      userId: 'u1',
      title: 'Task 3',
      summary: 'Summary 3',
      dueDate: new Date(),
    },
    {
      id: 't4',
      userId: 'u2',
      title: 'Task 4',
      summary: 'Summary 4',
      dueDate: new Date(),
    },
    {
      id: 't5',
      userId: 'u3',
      title: 'Task 5',
      summary: 'Summary 5',
      dueDate: new Date(),
    },
    {
      id: 't6',
      userId: 'u4',
      title: 'Task 6',
      summary: 'Summary 6',
      dueDate: new Date(),
    },
  ];

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly users = DUMMY_USERS;
  protected readonly tasks = DUMMY_TASKS;

  protected readonly selectedUser = signal<User | undefined>(undefined);
  protected readonly selectedTasks = signal<Task[] | undefined>(undefined);

  protected onUserSelected(userId: string): void {
    const user = this.users.find(user => user.id === userId);
    const tasks = this.tasks.filter(task => task.userId == userId);

    this.selectedUser.set(user);
    this.selectedTasks.set(tasks);
  }
}
