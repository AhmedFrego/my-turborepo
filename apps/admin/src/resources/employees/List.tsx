import { useSearchParams } from 'react-router-dom';
import { GendersChart } from 'src/charts';
import {
	DateField,
	GenderField,
	InfiniteListBase,
	List,
	ReferenceField,
	ReferenceManyCount,
	TextField,
} from 'src/components';
import { useTranslate } from 'src/hooks';

import { filters } from './Filters';

export const EmployeeList = () => {
	const translate = useTranslate();
	const [, setSearchParams] = useSearchParams();

	return (
		<>
			<InfiniteListBase
				perPage={1000}
				queryOptions={{ meta: { select: "'id', 'gender'" } }}
				resource="employees"
				storeKey="EmployeeList"
			>
				<GendersChart
					onClick={({ id }) => {
						setSearchParams({ filter: JSON.stringify({ gender: id }) });
					}}
				/>
			</InfiniteListBase>

			<List
				dataGridProps={{
					enablePrint: true,
					omit: [
						'certifications',
						'code',
						'country_of_birth_id',
						'date_of_birth',
						'date_of_hire',
						'date_of_termination',
						'emergency_contacts',
						'image_id',
						'job_title_id',
						'phone',
					],
					rowClick: 'show',
				}}
				filters={filters}
			>
				<TextField source="username" />
				<TextField source="full_name" />
				<TextField source="phone" />
				<TextField source="emergency_contacts" />
				<GenderField source="gender" />
				<DateField source="date_of_birth" />
				<ReferenceField
					reference="res_countries"
					source="country_of_birth_id"
				/>
				<ReferenceField
					reference="job_titles"
					source="job_title_id"
				/>
				<DateField source="date_of_hire" />
				<DateField source="date_of_termination" />
				<ReferenceManyCount
					link
					label={translate(`resources.certifications.name`, { smart_count: 2 })}
					reference="certifications"
					target="employee_id"
				/>
				<ReferenceManyCount
					link
					label={translate(`resources.relatives.name`, { smart_count: 2 })}
					reference="relatives"
					target="employee_id"
				/>
				<ReferenceManyCount
					link
					label={translate(`resources.requests.name`, { smart_count: 2 })}
					reference="requests"
					target="created_by"
				/>
			</List>
		</>
	);
};
