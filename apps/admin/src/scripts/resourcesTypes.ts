import * as Icons from '@mui/icons-material';
import { PublicTables, Tables } from 'src/types';

export type EmployeeResourceConfig<T extends PublicTables = PublicTables> = {
	[k in T]: Omit<Resource, 'resource'>;
};

export type ResourcesConfig<T extends PublicTables = PublicTables> = {
	[k in T]?: {
		recordRepresentation?: keyof Tables<k>;
	} & Omit<Resource, 'recordRepresentation' | 'resource'>;
};

type RecordRepresentation<T extends PublicTables = PublicTables> = {
	[K in T]: keyof Tables<T>;
};

export interface Resource<T extends PublicTables = PublicTables> {
	enabled?: boolean;
	hasCreate?: boolean;
	hasEdit?: boolean;
	hasShow?: boolean;
	icon?: keyof typeof Icons;
	intent?: boolean;
	path?: string;
	recordRepresentation?: T extends keyof RecordRepresentation
		? RecordRepresentation[T]
		: never;
	resource: T;
}
