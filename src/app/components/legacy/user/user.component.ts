import { Component, EventEmitter, Input, Output } from '@angular/core';

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

	@Output()
	public selectUser = new EventEmitter<string>();

	public get imagePath(): string {
		return `users/${this.user.avatar}`;
	}

	public onSelectUser(): void {
		this.selectUser.emit(this.user.id);
	}
}
