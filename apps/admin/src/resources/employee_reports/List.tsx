import {
	List,
	QuarterField,
	RatingField,
	ReferenceField,
} from 'src/components';

import { filters } from './Filters';

export const EmployeeReportList = () => {
	return (
		<List filters={filters}>
			<ReferenceField
				reference="employees"
				source="employee_id"
			/>
			<QuarterField source="quarter" />
			<RatingField
				precision={0.1}
				source="answers.total"
				transform={number => number / 40}
			/>
			<ReferenceField
				label="Report by"
				reference="employees"
				source="created_by"
			/>
		</List>
	);
};
