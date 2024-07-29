import React from 'react';
import {
	FilterButton as RaFilterButton,
	FilterButtonProps as RaFilterButtonProps,
} from 'react-admin';

export interface FilterButtonProps extends RaFilterButtonProps {}

export const FilterButton: React.FC<FilterButtonProps> = props => {
	const { ...rest } = props;

	return <RaFilterButton {...rest} />;
};
