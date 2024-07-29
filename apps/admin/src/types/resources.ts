import { ReactElement } from 'react';
import { PublicTables, Tables } from 'shared-first-tire';
import { LanguageCodeEnum } from 'src/constants';

import { ResourceProps } from './admin';

export type Nested<T extends PublicTables = PublicTables> = {
	[k in keyof Tables<T>]: k extends string
		? `${k}.${LanguageCodeEnum}` | k
		: never;
}[keyof Tables<T>];

export type RecordRepresentation<T extends PublicTables> =
	| ((record: Tables<T>) => string)
	| keyof Tables<T>
	| Nested<T>
	| ReactElement;

export interface AdminService<T extends PublicTables = PublicTables>
	extends Omit<ResourceProps, 'name' | 'recordRepresentation'> {
	name: T;
	recordRepresentation?: RecordRepresentation<T>;
}

export interface AdminRegistrationService<T extends PublicTables = PublicTables>
	extends Pick<ResourceProps, 'intent'> {
	name: T;
}

export interface EmployeeService<T extends PublicTables = PublicTables>
	extends Omit<ResourceProps, 'name' | 'recordRepresentation'> {
	name: T;
	recordRepresentation?: RecordRepresentation<T>;
}

export interface EmployeeRegistrationService<
	T extends PublicTables = PublicTables,
> extends Pick<ResourceProps, 'intent'> {
	name: T;
}
