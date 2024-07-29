import { DateField, ReferenceField, Show } from 'src/components';

export const ResidencyShow = () => {
	return (
		<Show>
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
			<DateField source="from" />
			<DateField source="to" />
			<ReferenceField
				reference="res_countries"
				source="issuer_id"
			/>
		</Show>
	);
};
