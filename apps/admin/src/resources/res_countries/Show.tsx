import { ReferenceField, Show, TextField } from 'src/components';

export const ResCountryShow = () => {
	return (
		<Show>
			<TextField source="name" />
			<TextField source="iso2" />
			<TextField source="iso3" />
			<TextField source="local_name" />
			<TextField source="nationality" />
			<ReferenceField
				reference="res_currencies"
				source="currency_id"
			/>
		</Show>
	);
};
