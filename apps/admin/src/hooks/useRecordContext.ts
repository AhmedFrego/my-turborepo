import {
	useRecordContext as useRaRecordContext,
	UseRecordContextParams,
} from 'react-admin';

import { RaRecord } from './data';

export const useRecordContext = <
	RecordType extends Omit<RaRecord, 'id'> | RaRecord = RaRecord,
>(
	props?: UseRecordContextParams<RecordType>,
) => {
	return useRaRecordContext<RecordType>(props);
};
