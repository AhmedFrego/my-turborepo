import { UseGetListOptions, useGetList as useRaGetList } from 'react-admin';

import { GetListParams, RaRecordTable } from './types';

export const useGetList = <
	T extends keyof RaRecordTable = keyof RaRecordTable,
	RecordType extends RaRecordTable[T] = RaRecordTable[T],
>(
	resource: T,
	params: Partial<GetListParams<RecordType>> = {},
	options?: UseGetListOptions<RecordType>,
) => useRaGetList<RecordType>(resource, params, options);
