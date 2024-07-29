import {
	BooleanField,
	DateField,
	NumberField,
	ReferenceField,
	ReferenceTypeField,
	Show,
	TextField,
} from 'src/components';

export const ContractShow = () => {
	return (
		<Show>
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
			<ReferenceField
				reference="job_titles"
				source="job_title_id"
			/>
			<TextField source="duties" />
			<TextField source="responsibilities" />
			<TextField source="benefits" />
			<ReferenceField
				reference="work_hours"
				source="work_hour_id"
			/>
			<NumberField source="salary" />
			<DateField source="date_of_start" />
			<NumberField source="retirement_age" />
			<NumberField source="maximum_retirement_renewal_age" />
			<NumberField source="probation_period" />
			<NumberField source="retirement_renewal_period" />
			<NumberField source="period" />
			<BooleanField source="insurance" />
			<ReferenceTypeField source="contract_type_id" />
		</Show>
	);
};
