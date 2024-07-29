import React from 'react';

import { Filter } from './Filter';

export interface BaseFilterProps {}

export const BaseFilter: React.FC<
	React.PropsWithChildren<BaseFilterProps>
> = props => {
	const { children } = props;

	return <Filter {...props}>{children}</Filter>;
};
