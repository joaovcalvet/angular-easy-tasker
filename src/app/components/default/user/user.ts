import { Component, computed, input, output } from '@angular/core';

interface User {
	id: string;
	name: string;
	avatar: string;
}

@Component({
	selector: 'app-user',
	standalone: true,
	imports: [],
	templateUrl: './user.html',
	styleUrl: './user.css',
})
export class UserComponent {
	public user = input.required<User>();
	public selectUser = output<string>();

	protected imagePath = computed(() => `users/${this.user().avatar}`);
	protected onSelectUser(): void {
		this.selectUser.emit(this.user().id);
	}
}
