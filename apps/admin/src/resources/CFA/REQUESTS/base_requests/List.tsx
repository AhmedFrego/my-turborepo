import { FiltersConfig, textFilter } from '@react-admin/ra-form-layout';
import React from 'react';
import { useCreatePath } from 'src/hooks';
import { PublicTables, RequestStatuses } from 'src/types';
import { alwaysArray, enumToOptions } from 'src/utils';

import { filters } from './Filters';
import { RequestStatusField } from './RequestStatusField';
import { radioGroupChoices } from './radioGroupChoices';
import {
	BaseCallForActionList,
	BaseCallForActionListProps,
} from '../../base_call_for_action/List';

const requestFilters: FiltersConfig = {
	status: radioGroupChoices({
		choices: enumToOptions(RequestStatuses),
	}),
	title: textFilter(),
};

export interface BaseRequestListProps extends BaseCallForActionListProps {}

export const BaseRequestList: React.FC<BaseRequestListProps> = props => {
	const { children, filters: childFilters, ...rest } = props;
	const createPath = useCreatePath();

	return (
		<BaseCallForActionList
			dataGridProps={{
				rowClick: (id, _, record) =>
					createPath({
						id: String(id),
						resource: record.type as PublicTables,
						type: 'show',
					}),
			}}
			filters={[...filters, ...alwaysArray(childFilters)]}
			stackedFilters={requestFilters}
			{...rest}
		>
			<RequestStatusField source="status" />
			{children}
		</BaseCallForActionList>
	);
};
