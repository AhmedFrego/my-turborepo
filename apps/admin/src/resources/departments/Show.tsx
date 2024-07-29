import { ReferenceField, Show, TextField } from 'src/components';

export const DepartmentShow = () => {
	return (
		<Show>
			<TextField source="name" />
			<TextField source="description" />
			<ReferenceField
				reference="entities"
				source="entity_id"
			/>
		</Show>
	);
};
