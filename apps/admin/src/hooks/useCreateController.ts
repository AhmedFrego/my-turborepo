import { useCreateController as useRaCreateController } from 'react-admin';

import { RaRecord } from './data';

export const useCreateController = <ResultRecordType extends RaRecord>() => {
	return useRaCreateController<ResultRecordType>();
};
