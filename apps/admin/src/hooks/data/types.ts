import { PaginationPayload } from 'react-admin';
import { PublicTables, Tables, TablesInsert } from 'src/types';

type StringKeys<RecordType> = {
	[F in keyof RecordType]: F extends string ? F : never;
}[keyof RecordType];

export type FilterType<RecordType extends RaRecord> =
	| { [k in keyof RecordType]?: { in: string[] } | string }
	| Partial<Record<`${StringKeys<RecordType>}@gte`, string>>
	| Partial<Record<`${StringKeys<RecordType>}@in`, string>>
	| Partial<Record<`${StringKeys<RecordType>}@lte`, string>>;

export interface SortType<RecordType extends RaRecord> {
	field: {
		[K in keyof RecordType]: K extends string ? K : never;
	}[keyof RecordType];
	order: 'ASC' | 'DESC';
}

export interface GetListParams<RecordType extends RaRecord> {
	filter: FilterType<RecordType>;
	meta?: unknown;
	pagination: PaginationPayload;
	sort: SortType<RecordType>;
}

export type RaRecordTable = {
	[k in PublicTables]: keyof Tables<k> extends string
		? Tables<k> extends { id: string }
			? Tables<k>
			: { id: string } & Tables<k>
		: never;
};

export type RaRecordInsertTable = {
	[k in PublicTables]: keyof TablesInsert<k> extends string
		? TablesInsert<k> extends { id: string }
			? TablesInsert<k>
			: { id: string } & TablesInsert<k>
		: never;
};

export type RecordTables = keyof RaRecordTable;

export type RaRecord = RaRecordTable[keyof RaRecordTable];

export type RecordInsertTables = keyof RaRecordInsertTable;

export type RaRecordInsert = RaRecordInsertTable[keyof RaRecordInsertTable];
