import { RelativesChart } from 'src/charts';
import {
	DateField,
	InfiniteListBase,
	List,
	ReferenceField,
	ReferenceTypeField,
	TextField,
} from 'src/components';

import { filters } from './Filters';

export const RelativeList = () => {
	return (
		<>
			<InfiniteListBase
				perPage={1000}
				resource="relatives"
				storeKey="RelativeList"
			>
				<RelativesChart />
			</InfiniteListBase>
			<List filters={filters}>
				<TextField source="name" />
				<DateField source="date_of_birth" />
				<ReferenceTypeField source="relation_types_id" />
				<TextField source="gender" />
				<ReferenceField
					reference="employees"
					source="employee_id"
				/>
			</List>
		</>
	);
};
