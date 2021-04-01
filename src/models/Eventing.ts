type Callback = () => void;

export class Eventing {
	constructor() {}
	events: { [key: string]: Callback[] } = {}; //[key: string] means that we don't know what properties the object will have

	on = (eventName: string, callback: Callback): void => {
		const handlers = this.events[eventName] || [];
		handlers.push(callback);
		this.events[eventName] = handlers;
	};

	trigger = (eventName: string): void => {
		const handlers = this.events[eventName];
		if (!handlers || handlers.length === 0) {
			return;
		}
		handlers.forEach(callback => callback());
	};
}
