import {
	BooleanInput,
	Create,
	DateInput,
	NumberInput,
	ReferenceInput,
	ReferenceTypeInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';
import { Categories } from 'src/constants';

export const ContractCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<ReferenceInput
					optionText="full_name"
					reference="employees"
					source="employee_id"
				/>
				<ReferenceInput
					reference="job_titles"
					source="job_title_id"
				/>
				<TextInput source="duties" />
				<TextInput
					grid={{ md: 6 }}
					source="responsibilities"
				/>
				<TextInput
					grid={{ md: 6 }}
					source="benefits"
				/>
				<ReferenceInput
					grid={{ sm: 6 }}
					reference="work_hours"
					source="work_hour_id"
				/>
				<NumberInput
					grid={{ sm: 6 }}
					source="salary"
				/>
				<DateInput
					grid={{ sm: 6 }}
					source="date_of_start"
				/>
				<NumberInput
					grid={{ sm: 6 }}
					source="probation_period"
				/>

				<NumberInput
					grid={{ sm: 6 }}
					source="retirement_age"
				/>
				<NumberInput
					grid={{ sm: 6 }}
					source="maximum_retirement_renewal_age"
				/>
				<NumberInput
					grid={{ sm: 6 }}
					source="retirement_renewal_period"
				/>
				<NumberInput
					grid={{ sm: 6 }}
					source="period"
				/>
				<BooleanInput source="insurance" />
				<ReferenceTypeInput
					category={Categories.Contracts}
					source="contract_type_id"
				/>
			</SimpleFormConfigurable>
		</Create>
	);
};
