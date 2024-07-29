import {
	CreateParams,
	UseCreateOptions,
	useCreate as useRaCreate,
} from 'react-admin';
import { NonJoinPublicTables, Tables } from 'src/types';
import { SetRequired } from 'type-fest';

import { RaRecord, RaRecordTable } from './types';

export const useCreate = <
	T extends NonJoinPublicTables,
	RecordType extends RaRecord = SetRequired<Tables<T>, 'id'>,
	MutationError = Error,
	ResultRecordType extends RaRecord = RaRecordTable[T],
>(
	resource?: T,
	params?: CreateParams<RecordType>,
	options?: UseCreateOptions<RecordType, MutationError, ResultRecordType>,
) =>
	useRaCreate<RecordType, MutationError, ResultRecordType>(
		resource,
		params,
		options,
	);
