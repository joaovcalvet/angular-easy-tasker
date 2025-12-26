import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
	selector: 'app-user',
	standalone: true,
	imports: [],
	templateUrl: './user.html',
	styleUrl: './user.css',
})
export class UserComponent {
	public selectedUser = signal(DUMMY_USERS[randomIndex]);
	public imagePath = computed(() => `users/${this.selectedUser().avatar}`);

	public onSelectUser(): void {
		this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);
	}
}
