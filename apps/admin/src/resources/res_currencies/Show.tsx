import { BooleanField, NumberField, Show, TextField } from 'src/components';

export const ResCurrencyShow = () => {
	return (
		<Show>
			<TextField source="name" />
			<TextField source="symbol" />
			<NumberField source="decimal_places" />
			<TextField source="position" />
			<TextField source="currency_unit_label" />
			<NumberField source="rounding" />
			<BooleanField source="active" />
			<TextField source="full_name" />
			<TextField source="currency_subunit_label" />
		</Show>
	);
};
