import { Component, output } from '@angular/core';

@Component({
  selector: 'app-new-task-form',
  imports: [],
  templateUrl: './new-task-form.html',
  styleUrl: './new-task-form.css',
})
export class NewTaskFormComponent {
  protected readonly addedTask = output<Event>();
  protected readonly cancelAddingTask = output<void>();
}
