import {
	Edit,
	NumberInput,
	SimpleFormConfigurable,
	SurveyAnswerInput,
} from 'src/components';

export const InsuranceReportEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<NumberInput
					max={2023}
					min={2019}
					source="year"
				/>
				<SurveyAnswerInput
					source="answers"
					surveyName="insurance_companies"
				/>
			</SimpleFormConfigurable>
		</Edit>
	);
};
