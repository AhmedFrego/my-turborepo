import { List, TextField } from 'src/components';

import { filters } from './Filters';

export const AnnouncementList = () => {
	return (
		<List filters={filters}>
			<TextField source="title" />
			<TextField source="message" />
			<TextField source="level" />
		</List>
	);
};
