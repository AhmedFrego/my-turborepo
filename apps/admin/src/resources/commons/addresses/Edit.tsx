import { LocationInput, ReferenceInput, TextInput } from 'src/components';

export const AddressEdit = () => {
	return (
		<>
			<LocationInput source="gps" />

			<ReferenceInput
				grid={{ sm: 6 }}
				optionText="name"
				reference="res_cities"
				source="city_id"
			/>
			<ReferenceInput
				grid={{ sm: 6 }}
				optionText="name"
				reference="res_countries"
				source="country_id"
			/>
			<TextInput
				grid={{ sm: 6 }}
				source="building"
			/>
			<TextInput
				grid={{ sm: 6 }}
				source="street"
			/>
			<TextInput
				grid={{ sm: 12 }}
				source="landmark"
			/>
		</>
	);
};
