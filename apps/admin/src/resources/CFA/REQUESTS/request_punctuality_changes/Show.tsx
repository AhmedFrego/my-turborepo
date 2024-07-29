import { DateField, ReferenceField, ReferenceTypeField } from 'src/components';

import { BaseRequestShow } from '../base_requests/Show';

export const RequestPunctualityChangeShow = () => {
	return (
		<BaseRequestShow>
			<ReferenceTypeField source="punctuality_type_id" />
			<DateField source="date_of_old_punctuality" />
			<DateField source="date_of_new_punctuality" />
			<ReferenceField
				reference="advances"
				source="advances_id"
			/>
		</BaseRequestShow>
	);
};
