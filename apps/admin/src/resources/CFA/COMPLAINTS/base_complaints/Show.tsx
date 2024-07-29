import React from 'react';

import {
	BaseCallForActionShow,
	BaseCallForActionShowProps,
} from '../../base_call_for_action/Show';

export interface BaseComplaintShowProps extends BaseCallForActionShowProps {}

export const BaseComplaintShow: React.FC<BaseComplaintShowProps> = props => {
	const { children, ...rest } = props;

	return <BaseCallForActionShow {...rest}>{children}</BaseCallForActionShow>;
};
