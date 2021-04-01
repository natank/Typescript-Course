import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserShow extends View<User, UserProps> {
	regionsMap(): { [key: string]: string } {
		return {
			userShow: '.user-shoe',
			userForm: '.user-form',
		};
	}
	template(): string {
		return `
      <div>
        <h1>User Detail</h1>
        <div>User Name: ${this.model.get('name')}
        <div>User Age: ${this.model.get('age')}
      </div>
    `;
	}
}
