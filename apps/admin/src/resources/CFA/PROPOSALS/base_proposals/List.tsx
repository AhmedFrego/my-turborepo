import React from 'react';

import { filters } from './Filters';
import {
	BaseCallForActionList,
	BaseCallForActionListProps,
} from '../../base_call_for_action/List';

export interface BaseProposalListProps extends BaseCallForActionListProps {}

export const BaseProposalList: React.FC<BaseProposalListProps> = props => {
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
