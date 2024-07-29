import React from 'react';
import { TextField } from 'src/components';
import { PublicTables } from 'src/types';

import { InReview } from './InReview';
import { RequestActions, RequestActionsProps } from './RequestActions';
import { RequestAudit } from './RequestAudit';
import { RequestEssentials } from './RequestEssentials';
import {
	BaseCallForActionShow,
	BaseCallForActionShowProps,
} from '../../base_call_for_action/Show';

export interface BaseRequestShowProps<T extends PublicTables = PublicTables>
	extends BaseCallForActionShowProps {
	actionProps?: RequestActionsProps<T>;
	actionsComponent?: JSX.Element;
}

export const BaseRequestShow = <T extends PublicTables = PublicTables>(
	props: React.PropsWithChildren<BaseRequestShowProps<T>>,
) => {
	const { actionsComponent, children, ...rest } = props;

	return (
		<BaseCallForActionShow
			slots={{
				essentials: {
					items: <RequestEssentials />,
				},
				footer: <RequestAudit />,
				layout: {
					footer: actionsComponent ?? <RequestActions />,
				},
			}}
			{...rest}
		>
			<TextField source="status" />
			<InReview />
			{children}
		</BaseCallForActionShow>
	);
};
