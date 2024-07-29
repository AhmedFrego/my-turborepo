import { Grid } from '@mui/material';
import {
	DateField,
	List,
	NearExpiryResourceCard,
	ReferenceField,
} from 'src/components';
import { monthDuration } from 'src/utils';

import { filters } from './Filters';

export const ResidencyList = () => {
	const lte = monthDuration();

	return (
		<>
			<Grid
				container
				columns={3}
				spacing={2}
			>
				<Grid item>
					<NearExpiryResourceCard
						field="to"
						lte={lte}
						resource="residencies"
						title="dashboard_cards.near_expiry.residencies"
					/>
				</Grid>
			</Grid>

			<List filters={filters}>
				<ReferenceField
					reference="employees"
					source="employee_id"
				/>
				<DateField source="from" />
				<DateField source="to" />
				<ReferenceField
					reference="res_countries"
					source="issuer_id"
				/>
			</List>
		</>
	);
};
