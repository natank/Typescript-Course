let apples = 5;

let speed = 'fast';
let hasName = true;
let nothingMuch = null;
let nothing = undefined;

// built in objects
let now = new Date();

// Array
let colors = ['red', 'green', 'blue'];
let myNumbers = [1, 2, 3];
let truths = [true, true, false];

// Calsses
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
	x: 10,
	y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
	console.log(i);
};

const add = (a: number, b: number): number => {
	return a + b;
};

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function (a: number, b: number): number {
	return a * b;
};

const logger = (message: string): void => {
	console.log(message);
};

const throwError = (message: string): never => {
	throw new Error(message);
};

const forecast = {
	date: new Date(),
	weather: 'sunny',
};

const todaysWeather = {
	date: new Date(),
	weather: 'sunny',
};

const logWeather = ({
	date,
	weather,
}: {
	date: Date;
	weather: string;
}): void => {
	console.log(date);
	console.log(weather);
};

logWeather(todaysWeather);
