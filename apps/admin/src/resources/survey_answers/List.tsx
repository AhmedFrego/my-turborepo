import { JsonField, List, ReferenceField, TextField } from 'src/components';

import { filters } from './Filters';

export const SurveyAnswerList = () => {
	return (
		<List filters={filters}>
			<ReferenceField
				reference="employees"
				source="responder_id"
			/>
			<ReferenceField
				reference="surveys"
				source="survey_id"
			/>
			<JsonField source="answers" />
			<TextField source="status" />
		</List>
	);
};
