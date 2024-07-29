import { JsonField, ReferenceField, Show, TextField } from 'src/components';

export const SurveyAnswerShow = () => {
	return (
		<Show>
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
		</Show>
	);
};
