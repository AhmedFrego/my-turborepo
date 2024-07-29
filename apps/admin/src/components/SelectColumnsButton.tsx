import React from 'react';
import {
	SelectColumnsButton as RaSelectColumnsButton,
	SelectColumnsButtonProps as RaSelectColumnsButtonProps,
} from 'react-admin';

export interface SelectColumnsButtonProps extends RaSelectColumnsButtonProps {}

export const SelectColumnsButton: React.FC<
	SelectColumnsButtonProps
> = props => {
	const { ...rest } = props;

	return <RaSelectColumnsButton {...rest} />;
};
