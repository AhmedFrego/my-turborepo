import { List, TranslatableField } from 'src/components';

import { filters } from './Filters';

export const JobTitleList = () => {
	return (
		<List filters={filters}>
			<TranslatableField source="name" />
		</List>
	);
};
