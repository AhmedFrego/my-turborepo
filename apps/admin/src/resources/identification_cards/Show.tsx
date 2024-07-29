import {
	DateField,
	ImageField,
	ReferenceField,
	Show,
	TextField,
} from 'src/components';

export const IdentificationCardShow = () => {
	return (
		<Show>
			<ImageField source="front_image_id" />
			<ImageField source="back_image_id" />
			<TextField source="id_number" />
			<DateField source="date_of_issue" />
			<ReferenceField
				reference="res_countries"
				source="place_of_issue_id"
			/>
			<TextField source="job_title" />
			<DateField source="date_of_expiry" />
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
		</Show>
	);
};
