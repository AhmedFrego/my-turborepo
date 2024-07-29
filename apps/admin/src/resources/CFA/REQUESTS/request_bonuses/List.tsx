import { ReferenceTypeField } from 'src/components';

import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestBonusList = () => {
	return (
		<BaseRequestList filter={filters}>
			<ReferenceTypeField source="bonus_type_id" />
		</BaseRequestList>
	);
};
