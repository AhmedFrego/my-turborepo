import React from 'react';
import { PublicTables } from 'src/types';

import { InReview } from './InReview';
import { RequestActions, RequestActionsProps } from './RequestActions';
import { RequestAudit } from './RequestAudit';
import { RequestEssentials } from './RequestEssentials';
import {
	BaseCallForActionEdit,
	BaseCallForActionEditProps,
} from '../../base_call_for_action/Edit';

export interface BaseRequestEditProps<T extends PublicTables = PublicTables>
	extends BaseCallForActionEditProps {
	actionsComponent?: React.ReactElement<RequestActionsProps<T>>;
}

export const BaseRequestEdit = <T extends PublicTables = PublicTables>(
	props: React.PropsWithChildren<BaseRequestEditProps<T>>,
) => {
	const { actionsComponent, children, ...rest } = props;

	return (
		<BaseCallForActionEdit
			footer={<RequestAudit />}
			slots={{
				essentials: {
					items: <RequestEssentials />,
				},
			}}
			{...rest}
		>
			<InReview />
			{children}
			{actionsComponent ?? <RequestActions />}
		</BaseCallForActionEdit>
	);
};
