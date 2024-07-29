import React from 'react';

import {
	BaseCallForActionEdit,
	BaseCallForActionEditProps,
} from '../../base_call_for_action/Edit';

export interface BaseComplaintEditProps extends BaseCallForActionEditProps {}

export const BaseComplaintEdit: React.FC<BaseComplaintEditProps> = props => {
	const { children, ...rest } = props;

	return <BaseCallForActionEdit {...rest}>{children}</BaseCallForActionEdit>;
};
