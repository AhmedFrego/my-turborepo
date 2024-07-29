import { DateField, ReferenceField, ReferenceTypeField } from 'src/components';

import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestPunctualityChangeList = () => {
	return (
		<BaseRequestList filters={filters}>
			<ReferenceTypeField source="punctuality_type_id" />
			<DateField source="date_of_old_punctuality" />
			<DateField source="date_of_new_punctuality" />
			<ReferenceField
				reference="advances"
				source="advances_id"
			/>
		</BaseRequestList>
	);
};
