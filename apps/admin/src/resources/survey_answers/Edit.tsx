import {
	Edit,
	JsonInput,
	ReferenceInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';

export const SurveyAnswerEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<ReferenceInput
					optionText="full_name"
					reference="employees"
					source="responder_id"
				/>
				<ReferenceInput
					optionText="name"
					reference="surveys"
					source="survey_id"
				/>
				<JsonInput source="answers" />
				<TextInput source="status" />
			</SimpleFormConfigurable>
		</Edit>
	);
};
