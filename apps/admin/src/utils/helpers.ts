import { sentenceCase } from 'change-case';
import { addMonths } from 'date-fns';
import hashIt from 'hash-it';
import {
	columnsHash,
	defaultValueHash,
	nameHash,
	nullableHash,
	structure,
	tableHash,
} from 'src/common';

export const transformId = (id: number | string) =>
	id ? String(id).slice(0, 3) + '...' : '';

export const stringToChoice = (item: string) => ({
	id: item,
	name: sentenceCase(item),
});

export const enumToOptions = <T extends Record<string, string>>(
	inputEnum: T,
): { id: T[keyof T]; name: string }[] =>
	Object.keys(inputEnum).map(
		element => stringToChoice(element) as { id: T[keyof T]; name: string },
	);

export const isColumnRequired = (resource: string, source?: string) => {
	if (!source) return !source;

	const column = structure
		.find(item => item[tableHash] === resource)
		?.[columnsHash].find(item => item[nameHash] === hashIt(source));

	return !!(column && !column[nullableHash] && !column[defaultValueHash]);
};

export const isColumnInTable = (table?: string, column?: string) => {
	if (column && table) {
		const columnName = column.split('@')[0];

		const foundTable = structure.find(item => item[tableHash] === table);

		const foundColumn = foundTable?.[columnsHash].find(
			column => column[nameHash] === hashIt(columnName),
		);

		return foundColumn?.[nameHash];
	}

	return false;
};

export const monthDuration = () => addMonths(new Date(), 1).toISOString();

export const resourceCalenderPath = (name: string) => `/${name}-calender`;

export const isFilterOwner = (resource: string) =>
	!!structure
		.find(item => item[tableHash] === resource)
		?.[columnsHash].find(item => item[nameHash] === hashIt('owner_id'))?.[
		nameHash
	];

export const isOwner = (current: string[], record: object) => {
	if (!('owner_id' in record)) return false;

	if (typeof record.owner_id !== 'string') return false;

	return !!(record.owner_id && current.includes(record.owner_id));
};

export const upperCaseFirst = (text: string) => {
	return text.charAt(0).toUpperCase() + text.slice(1);
};

export const alwaysArray = <T>(value?: T | T[]): T[] => {
	if (value) return Array.isArray(value) ? value : [value];

	return [];
};

export const stringToColor = <T = unknown>(string: T) => {
	const stringified = JSON.stringify(string);

	let hash = 0;
	let index;

	for (index = 0; index < stringified.length; index += 1) {
		const char = stringified.codePointAt(index);

		if (char) {
			hash = char + ((hash << 5) - hash);
		}
	}

	let color = '#';

	for (index = 0; index < 3; index += 1) {
		const value = (hash >> (index * 8)) & 0xff;

		if (value) {
			color += `00${value.toString(16)}`.slice(-2);
		}
	}

	return color;
};

export const ilikeFilterToQuery =
	(field: string = 'name') =>
	(searchText: string) => ({ [`${field}@ilike`]: `%${searchText}%` });

export const safeStringify = (...args: Parameters<typeof JSON.stringify>) => {
	try {
		return JSON.stringify(...args);
	} catch {
		console.log(args[0]);

		return `Not serializable Object of type: ${typeof args[0]}`;
	}
};
