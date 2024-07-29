import {
	BooleanField,
	DateField,
	List,
	NumberField,
	ReferenceField,
	ReferenceTypeField,
	TextField,
} from 'src/components';

import { filters } from './Filters';

export const ContractList = () => {
	// const lte = monthDuration();

	return (
		<>
			{/* <Grid
				container
				columns={3}
				spacing={2}
			>
				<Grid item>
					<NearExpiryResourceCard
						field="date_of_renewal"
						lte={lte}
						resource="contracts"
						title="dashboard_cards.near_expiry.contracts"
					/>
				</Grid>
			</Grid> */}

			<List filters={filters}>
				<ReferenceField
					reference="employees"
					source="employee_id"
				/>
				<ReferenceField
					reference="job_titles"
					source="job_title_id"
				/>
				<TextField source="duties" />
				<TextField source="responsibilities" />
				<TextField source="benefits" />
				<ReferenceField
					reference="work_hours"
					source="work_hour_id"
				/>
				<NumberField source="salary" />
				<DateField source="date_of_start" />
				<NumberField source="retirement_age" />
				<NumberField source="maximum_retirement_renewal_age" />
				<NumberField source="probation_period" />
				<NumberField source="retirement_renewal_period" />
				<NumberField source="period" />
				<BooleanField source="insurance" />
				<ReferenceTypeField source="contract_type_id" />
			</List>
		</>
	);
};
