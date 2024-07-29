import {
	Edit,
	QuarterInput,
	ReferenceInput,
	SimpleFormConfigurable,
	SurveyAnswerInput,
} from 'src/components';

export const EmployeeReportEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<QuarterInput source="quarter" />
				<ReferenceInput
					reference="employees"
					source="employee_id"
				/>
				<SurveyAnswerInput
					source="answers"
					surveyName="employees_evaluation"
				/>
			</SimpleFormConfigurable>
		</Edit>
	);
};
