import fs from 'fs';
import { MatchResult } from './MatchResult';
import { dateStringToDate } from './utils';

// Define new tupple

export abstract class CsvFileReader<T> {
	data: T[] = [];

	constructor(public filename: string) {}
	abstract mapRow(row: string[]): T;

	read(): void {
		this.data = fs
			.readFileSync(this.filename, {
				encoding: 'utf-8',
			})
			.split('\n')
			.map((row: string): string[] => {
				return row.split(',');
			})
			.map(
				(row: string[]): T => {
					return this.mapRow(row);
				}
			);
	}
}
