import { Box, Stack } from '@mui/material';
import React from 'react';
import { FilterForm } from 'react-admin';
import {
	FilterButton,
	InfiniteListBase,
	InfinitePagination,
	ReferenceInput,
	SelectInput,
} from 'src/components';
import { useUser } from 'src/hooks';
import { requests } from 'src/resources/resourceCategory';
import { RequestStatuses } from 'src/types';
import { enumToOptions } from 'src/utils';

import { Audit } from './Audit';

const filters = [
	<SelectInput
		key="title@ilike"
		choices={enumToOptions(RequestStatuses)}
		source="old_status"
	/>,
	<SelectInput
		key="type@ilike"
		choices={enumToOptions(RequestStatuses)}
		source="new_status"
	/>,
	<SelectInput
		key="status@ilike"
		alwaysOn
		choices={requests.map(item => ({
			id: item,
			name: `resources.${item}.name_other`,
		}))}
		source="request_type"
	/>,
	<ReferenceInput
		key="name@ilike"
		optionText="full_name"
		reference="employees"
		source="created_by"
	/>,
];

const ListToolbar = () => (
	<Stack
		direction="row"
		justifyContent="space-between"
	>
		<FilterForm filters={filters} />
		<Box sx={{ alignItems: 'center', display: 'flex' }}>
			<FilterButton
				filters={filters}
				style={{ width: 'max-content' }}
			/>
		</Box>
	</Stack>
);

export interface MyRequestHistoryProps {}

export const MyRequestHistory: React.FC<MyRequestHistoryProps> = () => {
	const user = useUser();

	return (
		<InfiniteListBase
			filter={{ created_by: user?.id }}
			resource="status_histories"
			storeKey="MyRequestHistory"
		>
			<ListToolbar />

			<Audit />
			<InfinitePagination />
		</InfiniteListBase>
	);
};
