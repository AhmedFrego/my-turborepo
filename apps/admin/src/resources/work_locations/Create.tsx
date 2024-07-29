import {
	Create,
	ReferenceInput,
	ReferenceTypeInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';
import { Categories } from 'src/constants';

import { AddressCreate, ContactInformationCreate } from '../commons';

export const WorkLocationCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<TextInput source="name" />
				<ReferenceTypeInput
					category={Categories.Activity}
					source="activity_types_id"
				/>
				<ContactInformationCreate />
				<AddressCreate />
				<ReferenceInput
					optionText="name"
					reference="entities"
					source="entity_id"
				/>
			</SimpleFormConfigurable>
		</Create>
	);
};
