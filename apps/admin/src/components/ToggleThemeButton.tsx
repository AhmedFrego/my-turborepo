import React from 'react';
import { ToggleThemeButton as RaToggleThemeButton } from 'react-admin';

export interface ToggleThemeButtonProps {}

export const ToggleThemeButton: React.FC<ToggleThemeButtonProps> = props => {
	const { ...rest } = props;

	return <RaToggleThemeButton {...rest} />;
};
