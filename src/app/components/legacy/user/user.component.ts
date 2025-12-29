import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../../../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

interface User {
	id: string;
	name: string;
	avatar: string;
}

@Component({
	selector: 'app-user-old',
	standalone: true,
	imports: [],
	templateUrl: './user.component.html',
	styleUrl: './user.component.css',
})
export class UserComponent {
	@Input()
	public user!: User;
	public selectedUser = DUMMY_USERS[randomIndex];

	public get imagePath(): string {
		return `users/${this.selectedUser.avatar}`;
	}

	public onSelectUser(): void {
		this.selectedUser = DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
	}
}
