import { SelectInput } from 'src/components';
import { RequestStatuses } from 'src/types';
import { enumToOptions } from 'src/utils';

export const filters = [
	<SelectInput
		key="title@ilike"
		choices={enumToOptions(RequestStatuses)}
		source="status"
	/>,
];
