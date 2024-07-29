import React from 'react';
import { Filter as RaFilter, FilterProps as RaFilterProps } from 'react-admin';

export interface FilterProps extends RaFilterProps {}

export const Filter: React.FC<FilterProps> = props => {
	const { ...rest } = props;

	return <RaFilter {...rest} />;
};
