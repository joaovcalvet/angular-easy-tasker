import { Component, computed, input, signal } from '@angular/core';
import { User } from '../../../models/user';
import { TaskComponent } from "./task/task";
import { Task } from '../../../models/task';
import { NewTaskFormComponent } from "./new-task-form/new-task-form";
import { NewTaskFormModel } from '../../../models/new-task-form';

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
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskFormComponent],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class TasksComponent {
  public readonly user = input.required<User>();

  private allTasks = signal(DUMMY_TASKS);
  protected readonly isAddingTask = signal(false);

  protected readonly tasks = computed(() => this.allTasks().filter(task => task.userId === this.user().id));
  protected readonly hasTasks = computed(() => this.tasks().length > 0);

  protected onAddTask() {
    this.isAddingTask.set(true);
  }

  protected onCancelAdd() {
    this.isAddingTask.set(false);
  }

  protected onTaskComplete(taskId: string) {
    this.allTasks.update(tasks => tasks.filter(task => task.id !== taskId));
  }

  protected addTask(task: NewTaskFormModel) {
    this.allTasks.update(tasks => [...tasks, {
      id: 't' + (tasks.length + 1),
      userId: this.user().id,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    }]);
  }
}
