import {
	GetListParams,
	UseInfiniteGetListOptions,
	useInfiniteGetList as useRaInfiniteGetList,
} from 'react-admin';
import { NonJoinPublicTables, Tables } from 'src/types';
import { SetRequired } from 'type-fest';

import { RaRecord } from './data';

export const useInfiniteGetList = <
	T extends NonJoinPublicTables,
	RecordType extends RaRecord = SetRequired<Tables<T>, 'id'>,
>(
	resource: T,
	params: Partial<GetListParams> = {},
	options?: UseInfiniteGetListOptions<RecordType>,
) => useRaInfiniteGetList<RecordType>(resource, params, options);
