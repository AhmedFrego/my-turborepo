import { useEditContext as useRaEditContext } from 'react-admin';

import { RaRecord } from './data';

export const useEditContext = <RecordType extends RaRecord>() => {
	return useRaEditContext<RecordType>();
};
