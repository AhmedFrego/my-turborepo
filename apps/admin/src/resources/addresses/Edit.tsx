import {
	Edit,
	LocationInput,
	ReferenceInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';

export const AddressEdit = () => {
	return (
		<Edit>
			<SimpleFormConfigurable>
				<LocationInput source="gps" />
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
			</SimpleFormConfigurable>
		</Edit>
	);
};
