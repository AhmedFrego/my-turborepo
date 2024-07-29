import React from 'react';

import {
	BaseCallForActionEdit,
	BaseCallForActionEditProps,
} from '../../base_call_for_action/Edit';

export interface BaseProposalEditProps extends BaseCallForActionEditProps {}

export const BaseProposalEdit: React.FC<BaseProposalEditProps> = props => {
	const { children, ...rest } = props;

	return <BaseCallForActionEdit {...rest}>{children}</BaseCallForActionEdit>;
};
