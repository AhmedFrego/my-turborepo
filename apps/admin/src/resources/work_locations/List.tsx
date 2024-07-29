import {
	List,
	ReferenceField,
	ReferenceTypeField,
	TextField,
} from 'src/components';

import { filters } from './Filters';
import { AddressList, ContactInformationList } from '../commons';

export const WorkLocationList = () => {
	return (
		<List filters={filters}>
			<TextField source="name" />
			<ReferenceTypeField source="activity_types_id" />
			{...ContactInformationList}
			{...AddressList}
			<ReferenceField
				reference="entities"
				source="entity_id"
			/>
		</List>
	);
};
