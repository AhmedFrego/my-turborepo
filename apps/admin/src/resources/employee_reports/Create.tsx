import {
	Create,
	QuarterInput,
	ReferenceInput,
	SimpleFormConfigurable,
	SurveyAnswerInput,
} from 'src/components';

export const EmployeeReportCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<QuarterInput source="quarter" />
				<ReferenceInput
					optionText="full_name"
					reference="employees"
					source="employee_id"
				/>
				<SurveyAnswerInput
					source="answers"
					surveyName="employees_evaluation"
				/>
			</SimpleFormConfigurable>
		</Create>
	);
};
