import { ReferenceInput } from 'src/components';

export const filters = [
	<ReferenceInput
		key="survey_id"
		alwaysOn
		optionText="name"
		reference="surveys"
		source="survey_id"
	/>,
	<ReferenceInput
		key="responder_id"
		alwaysOn
		optionText="full_name"
		reference="employees"
		source="responder_id"
	/>,
];
