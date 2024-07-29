import { Grid } from '@mui/material';
import {
	DateField,
	ImageField,
	List,
	NearExpiryResourceCard,
	ReferenceField,
	TextField,
} from 'src/components';
import { monthDuration } from 'src/utils';

import { filters } from './Filters';

export const IdentificationCardList = () => {
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
						resource="identification_cards"
						title="dashboard_cards.near_expiry.identification_card"
					/>
				</Grid>
			</Grid>

			<List filters={filters}>
				<ImageField source="front_image_id" />
				<ImageField source="back_image_id" />
				<TextField source="id_number" />
				<DateField source="date_of_issue" />
				<ReferenceField
					reference="res_countries"
					source="place_of_issue_id"
				/>
				<TextField source="job_title" />
				<DateField source="date_of_expiry" />
				<ReferenceField
					reference="employees"
					source="employee_id"
				/>
			</List>
		</>
	);
};
