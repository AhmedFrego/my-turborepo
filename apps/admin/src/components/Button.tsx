import React from 'react';
import { Button as RaButton, ButtonProps as RaButtonProps } from 'react-admin';

export interface ButtonProps extends RaButtonProps {}

export const Button: React.FC<ButtonProps> = props => {
	const { ...rest } = props;

	return <RaButton {...rest} />;
};
