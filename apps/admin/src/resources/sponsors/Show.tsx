import { ReferenceField, Show } from 'src/components';

export const SponsorShow = () => {
	return (
		<Show>
			<ReferenceField
				reference="entities"
				source="entity_id"
			/>
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
		</Show>
	);
};
