import { ReferenceField, Show, TextField } from 'src/components';

export const AddressShow = () => {
	return (
		<Show>
			<ReferenceField
				reference="res_countries"
				source="country_id"
			/>
			<TextField source="street" />
			<TextField source="building" />
			<ReferenceField
				reference="res_cities"
				source="city_id"
			/>
		</Show>
	);
};
