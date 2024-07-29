import { DateField } from 'src/components';
import { isDevelopment } from 'src/constants';

import { ReferenceField } from './references';

export const UtilFields = isDevelopment
	? [
			<DateField
				key="updated_at"
				source="updated_at"
			/>,
			<DateField
				key="created_at"
				source="created_at"
			/>,
			<ReferenceField
				key="created_by"
				reference="employees"
				source="created_by"
			/>,
			<ReferenceField
				key="owner_id"
				reference="entities"
				source="owner_id"
			/>,
		]
	: [];
