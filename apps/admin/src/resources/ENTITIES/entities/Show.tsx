import {
	ChipField,
	EmailField,
	ReferenceField,
	ReferenceManyToManyField,
	Show,
	SingleFieldList,
	TextField,
	UrlField,
} from 'src/components';

export const EntityShow = () => {
	return (
		<Show>
			<TextField source="name" />
			<TextField source="trading_number" />
			<TextField source="tax_number" />
			<TextField source="activity" />
			<TextField source="type" />
			<ReferenceField
				reference="entity_types"
				source="entity_type_id"
			/>
			<EmailField source="email" />
			<TextField source="phone" />
			<ReferenceField
				reference="images"
				source="logo_id"
			/>
			<UrlField source="website" />
			<ReferenceManyToManyField
				reference="employees"
				through="join_entity_employees"
				using="entity_id,employee_id"
			>
				<SingleFieldList>
					<ChipField source="username" />
				</SingleFieldList>
			</ReferenceManyToManyField>
		</Show>
	);
};
