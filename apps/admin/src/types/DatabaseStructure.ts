import {
	columnsHash,
	defaultValueHash,
	isForeignKeyHash,
	nameHash,
	nullableHash,
	referencedTableHash,
	tableHash,
	typeHash,
	userTypeHash,
} from 'src/common';

import { PublicTables } from './helpers';

export interface StructureColumn {
	[defaultValueHash]: number;
	[isForeignKeyHash]?: number;
	[nameHash]: number;
	[nullableHash]: number;
	[referencedTableHash]?: number;
	[typeHash]: number;
	[userTypeHash]: number;
}

export interface StructureTable {
	[columnsHash]: StructureColumn[];
	[tableHash]: PublicTables;
}
