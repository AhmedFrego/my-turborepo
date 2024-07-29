import { BooleanField, List, NumberField, TextField } from 'src/components';

import { filters } from './Filters';

export const ResCurrencyList = () => {
	return (
		<List filters={filters}>
			<TextField source="name" />
			<TextField source="symbol" />
			<NumberField source="decimal_places" />
			<TextField source="position" />
			<TextField source="currency_unit_label" />
			<NumberField source="rounding" />
			<BooleanField source="active" />
			<TextField source="full_name" />
			<TextField source="currency_subunit_label" />
		</List>
	);
};
