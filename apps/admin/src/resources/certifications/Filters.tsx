import { SearchInput } from 'src/components';

export const filters = [
	<SearchInput
		key="name@ilike"
		alwaysOn
		source="name@ilike"
	/>,
	<SearchInput
		key="specialization@ilike"
		alwaysOn
		placeholder={[
			'ra.action.search',
			'resources.certifications.fields.specialization',
		]}
		source="specialization@ilike"
	/>,
];
