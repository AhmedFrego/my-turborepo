import React from 'react';
import { List, ListProps, TextField } from 'src/components';
import { alwaysArray } from 'src/utils';
import { SetOptional } from 'type-fest';

import { filters } from './Filters';

export interface BaseCallForActionListProps
	extends SetOptional<ListProps, 'children'> {}

export const BaseCallForActionList: React.FC<
	BaseCallForActionListProps
> = props => {
	const { children, filters: childFilters, ...rest } = props;

	return (
		<List
			filters={[...filters, ...alwaysArray(childFilters)]}
			{...rest}
		>
			<TextField
				label="resources.base_call_for_action.fields.title"
				source="title"
			/>
			<TextField
				label="resources.base_call_for_action.fields.notes"
				source="notes"
			/>
			{children}
		</List>
	);
};
