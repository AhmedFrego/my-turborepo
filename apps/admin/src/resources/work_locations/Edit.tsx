import {
	Edit,
	ReferenceInput,
	ReferenceTypeInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';
import { Categories } from 'src/constants';

import { AddressEdit, ContactInformationEdit } from '../commons';

export const WorkLocationEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<TextInput source="name" />
				<ReferenceTypeInput
					category={Categories.Activity}
					source="activity_types_id"
				/>
				<ContactInformationEdit />
				<AddressEdit />
				<ReferenceInput
					optionText="name"
					reference="entities"
					source="entity_id"
				/>
			</SimpleFormConfigurable>
		</Edit>
	);
};
