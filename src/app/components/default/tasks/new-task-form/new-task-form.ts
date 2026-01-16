import { Component, output, signal } from '@angular/core';
import { form, Field } from '@angular/forms/signals';
import { NewTaskFormModel, initialFormNewTask, NewTaskFormSchema } from '../../../../models/new-task-form';

@Component({
  selector: 'app-new-task-form',
  imports: [Field],
  templateUrl: './new-task-form.html',
  styleUrl: './new-task-form.css',
})
export class NewTaskFormComponent {
  protected readonly addTaskModel = signal<NewTaskFormModel>(initialFormNewTask);

  protected readonly addedTask = output<NewTaskFormModel>();
  protected readonly cancelAddingTask = output<void>();

  protected addTaskForm = form(this.addTaskModel, NewTaskFormSchema);

  protected createNewTask(event: Event) {
    event.preventDefault();
    this.addedTask.emit(this.addTaskModel());
  }
}
