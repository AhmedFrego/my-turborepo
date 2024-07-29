import {
	Create,
	NumberInput,
	SimpleFormConfigurable,
	SurveyAnswerInput,
} from 'src/components';

export const InsuranceReportCreate = () => {
	return (
		<Create>
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
		</Create>
	);
};
