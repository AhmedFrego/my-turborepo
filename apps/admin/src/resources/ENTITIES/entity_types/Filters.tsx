import { ReferenceInput, SearchInput } from 'src/components';

export const filters = [
	<SearchInput
		key="name@ilike"
		alwaysOn
		source="name@ilike"
	/>,
	<ReferenceInput
		key="entity_types"
		reference="entity_types"
		source="entity_type_id"
	/>,
];
