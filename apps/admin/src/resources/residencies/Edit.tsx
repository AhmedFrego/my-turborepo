import {
	DateInput,
	Edit,
	ReferenceInput,
	SimpleFormConfigurable,
} from 'src/components';

export const ResidencyEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<ReferenceInput
					optionText="full_name"
					reference="employees"
					source="employee_id"
				/>
				<DateInput source="from" />
				<DateInput source="to" />
				<ReferenceInput
					reference="res_countries"
					source="issuer_id"
				/>
			</SimpleFormConfigurable>
		</Edit>
	);
};
