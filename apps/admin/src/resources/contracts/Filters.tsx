import { ReferenceInput } from 'src/components';

export const filters = [
	<ReferenceInput
		key="full_name@ilike"
		alwaysOn
		optionText="full_name"
		reference="employees"
		source="employee_id"
	/>,
];
