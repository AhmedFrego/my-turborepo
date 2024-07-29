import React from 'react';
import {
	UrlField as RaUrlField,
	UrlFieldProps as RaUrlFieldProps,
} from 'react-admin';
import { useValidResourceColumn } from 'src/hooks';
import { NonJoinPublicTables } from 'src/types';

export interface UrlFieldProps extends RaUrlFieldProps {
	resource?: NonJoinPublicTables;
}

export const UrlField: React.FC<UrlFieldProps> = props => {
	const { target, ...rest } = props;

	useValidResourceColumn(props);

	return (
		<RaUrlField
			target={target ?? '_blank'}
			{...rest}
		/>
	);
};
