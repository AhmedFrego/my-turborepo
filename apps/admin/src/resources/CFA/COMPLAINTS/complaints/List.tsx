import { TextField } from 'src/components';

import { filters } from './Filters';
import { BaseComplaintList } from '../base_complaints/List';

export const ComplaintList = () => {
	return (
		<BaseComplaintList filter={filters}>
			<TextField source="description" />
		</BaseComplaintList>
	);
};
