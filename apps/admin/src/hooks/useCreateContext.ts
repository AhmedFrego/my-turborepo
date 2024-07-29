import { useCreateContext as useRaCreateContext } from 'react-admin';

import { RaRecord } from './data';

export const useCreateContext = <RecordType extends RaRecord = RaRecord>() => {
	return useRaCreateContext<RecordType>();
};
