import {
	UsePrevNextControllerProps,
	usePrevNextController as useRaPreviousNextController,
} from 'react-admin';

import { RaRecord } from './data';

export const usePreviousNextController = <RecordType extends RaRecord>(
	props: UsePrevNextControllerProps<RecordType>,
) => {
	return useRaPreviousNextController<RecordType>(props);
};
