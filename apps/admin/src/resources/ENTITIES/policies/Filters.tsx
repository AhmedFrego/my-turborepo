import { ReferenceInput } from 'src/components';

export const filters = [
	<ReferenceInput
		key="entity_id"
		alwaysOn
		optionText="name"
		reference="entities"
		source="owner_id"
	/>,
];
