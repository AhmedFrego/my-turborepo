import { NumberField, ReferenceField, Show, TextField } from 'src/components';

export const ResCityShow = () => {
	return (
		<Show>
			<TextField source="name" />
			<TextField source="city_ascii" />
			<NumberField source="lat" />
			<NumberField source="lng" />
			<TextField source="admin_name" />
			<TextField source="capital" />
			<NumberField source="population" />
			<ReferenceField
				reference="res_countries"
				source="country_id"
			/>
		</Show>
	);
};
