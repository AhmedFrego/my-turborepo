import {
	EditControllerProps,
	useEditController as useRaEditController,
} from 'react-admin';

import { RaRecord } from './data';

export const useEditController = <RecordType extends RaRecord>(
	props: EditControllerProps<RecordType> = {},
) => {
	return useRaEditController<RecordType>(props);
};
