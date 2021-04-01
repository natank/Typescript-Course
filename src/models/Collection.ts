import { Eventing } from './Eventing';
import jsonDB from '../API/jsonDb';
import { AxiosResponse } from 'axios';

export class Collection<T, K> {
	models: T[] = [];
	events: Eventing = new Eventing();

	constructor(public deserialize: (json: K) => T) {}

	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	fetch(): void {
		jsonDB.get('/users').then((response: AxiosResponse) => {
			response.data.forEach((value: K) => {
				this.models.push(this.deserialize(value));
			});
			this.trigger('change');
		});
	}
}
