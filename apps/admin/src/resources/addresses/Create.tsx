import {
	Create,
	LocationInput,
	ReferenceInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';

export const AddressCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<LocationInput source="gps" />
				<TextInput
					grid={{ sm: 6 }}
					source="street"
				/>
				<TextInput
					grid={{ sm: 6 }}
					source="building"
				/>
				<TextInput
					grid={{ sm: 12 }}
					source="landmark"
				/>
				<ReferenceInput
					grid={{ sm: 6 }}
					optionText="name"
					reference="res_countries"
					source="country_id"
				/>
				<ReferenceInput
					grid={{ sm: 6 }}
					optionText="name"
					reference="res_cities"
					source="city_id"
				/>
			</SimpleFormConfigurable>
		</Create>
	);
};
