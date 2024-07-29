import { TextField } from 'src/components';

import { filters } from './Filters';
import { RequestDelegationList } from '../List';

export const RequestExternalDelegationList = () => {
	return (
		<RequestDelegationList filter={filters}>
			<TextField source="destination" />
		</RequestDelegationList>
	);
};
