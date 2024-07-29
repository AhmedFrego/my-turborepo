import { Grid } from '@mui/material';
import {
	DateField,
	List,
	NearExpiryResourceCard,
	ReferenceField,
	TextField,
} from 'src/components';
import { monthDuration } from 'src/utils';

import { filters } from './Filters';

export const PassportList = () => {
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
						resource="passports"
						title="dashboard_cards.near_expiry.passports"
					/>
				</Grid>
			</Grid>
			<List filters={filters}>
				<ReferenceField
					reference="employees"
					source="employee_id"
				/>
				<ReferenceField
					reference="res_countries"
					source="place_of_issue_id"
				/>
				<DateField source="date_of_issue" />
				<DateField source="date_of_expiry" />
				<TextField source="job_title" />
			</List>
		</>
	);
};
