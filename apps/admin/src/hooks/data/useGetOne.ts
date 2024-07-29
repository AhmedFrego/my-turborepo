import { UseQueryOptions } from '@tanstack/react-query';
import { GetOneParams, useGetOne as useRaGetOne } from 'react-admin';

import { RaRecordTable } from './types';

export const useGetOne = <
	T extends keyof RaRecordTable = keyof RaRecordTable,
	RecordType extends RaRecordTable[T] = RaRecordTable[T],
>(
	resource: T,
	params: GetOneParams<RecordType>,
	options?: UseQueryOptions<RecordType>,
) => useRaGetOne<RecordType>(resource, params, options);
