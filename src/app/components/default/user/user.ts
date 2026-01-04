import { Component, computed, input, output } from '@angular/core';
import { User } from '../../../models/user';

@Component({
	selector: 'app-user',
	standalone: true,
	imports: [],
	templateUrl: './user.html',
	styleUrl: './user.css',
})
export class UserComponent {
	//inputs
	public user = input.required<User>();
	public selected = input.required<boolean>();

	//outputs
	public selectUser = output<string>();

	//computed
	protected imagePath = computed(() => `users/${this.user().avatar}`);

	//methods
	protected onSelectUser(): void {
		this.selectUser.emit(this.user().id);
	}
}
