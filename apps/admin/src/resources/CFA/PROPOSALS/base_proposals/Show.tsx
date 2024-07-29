import React from 'react';

import {
	BaseCallForActionShow,
	BaseCallForActionShowProps,
} from '../../base_call_for_action/Show';

export interface BaseProposalShowProps extends BaseCallForActionShowProps {}

export const BaseProposalShow: React.FC<BaseProposalShowProps> = props => {
	const { children, ...rest } = props;

	return <BaseCallForActionShow {...rest}>{children}</BaseCallForActionShow>;
};
