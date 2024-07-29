import React from 'react';

import { filters } from './Filters';
import {
	BaseCallForActionList,
	BaseCallForActionListProps,
} from '../../base_call_for_action/List';

export interface BaseComplaintListProps extends BaseCallForActionListProps {}

export const BaseComplaintList: React.FC<BaseComplaintListProps> = props => {
	const { children, ...rest } = props;

	return (
		<BaseCallForActionList
			filters={filters}
			{...rest}
		>
			{children}
		</BaseCallForActionList>
	);
};
