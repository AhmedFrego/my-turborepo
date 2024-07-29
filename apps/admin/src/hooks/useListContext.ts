import { useListContext as useRaListContext } from 'react-admin';

import { RaRecord } from './data';

export const useListContext = <RecordType extends RaRecord>() => {
	return useRaListContext<RecordType>();
};
