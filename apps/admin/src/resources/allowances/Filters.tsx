import { ReferenceInput } from 'src/components';

export const filters = [
	<ReferenceInput
		key="employee_id@ilike"
		alwaysOn
		reference="employees"
		source="employee_id@ilike"
	/>,
	// TODO:fix filter
];
