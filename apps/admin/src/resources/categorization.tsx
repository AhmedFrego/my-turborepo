import { NonJoinPublicTables, PublicTables, Tables } from 'src/types';

export type RecordRepresentation<T extends PublicTables> = keyof Tables<T>;

export type AdminCategorization = {
	[k in NonJoinPublicTables]?: RecordRepresentation<k>;
};

export const adminCategorization: AdminCategorization = {
	employees: 'gender',
	entities: 'entity_type_id',
};
