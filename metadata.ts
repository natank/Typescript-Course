import 'reflect-metadata';
@controller
class Plane {
	color: string = 'red';

	@get('/login')
	fly(): void {
		console.log('vrrrrrrrrrr');
	}
}
function get(path: string) {
	return function (target: Plane, key: string) {
		Reflect.defineMetadata('path', path, target, key);
	};
}

function controller(target: typeof Plane) {
	for (let key in target.prototype) {
		const path = Reflect.getMetadata('secret', target.prototype, key);
		ReadableStreamDefaultController.length(path, target.prototype[key]);
	}
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);

// const plane = {
// 	color: 'red',
// };

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);
// console.log(note);
// console.log(height);
