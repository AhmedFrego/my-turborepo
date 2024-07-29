import { Grid } from '@mui/material';
import {
	DateField,
	List,
	NearExpiryResourceCard,
	ReferenceField,
	ReferenceTypeField,
	TextField,
} from 'src/components';
import { monthDuration } from 'src/utils';

import { filters } from './Filters';

export const DriverLicenseList = () => {
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
						field="date_of_expiry"
						lte={lte}
						resource="driver_licenses"
						title="dashboard_cards.near_expiry.driver_licenses"
					/>
				</Grid>
			</Grid>

			<List filters={filters}>
				<ReferenceField
					reference="employees"
					source="employee_id"
				/>
				<TextField source="license_number" />
				<TextField source="type" />
				<DateField source="date_of_issue" />
				<DateField source="date_of_expiry" />
				<ReferenceTypeField source="blood_type_id" />
			</List>
		</>
	);
};
