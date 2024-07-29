import React from 'react';
import {
	LinearProgress as RaLinearProgress,
	LinearProgressProps as RaLinearProgressProps,
} from 'react-admin';

export interface LinearProgressProps extends RaLinearProgressProps {}

export const LinearProgress: React.FC<LinearProgressProps> = props => {
	const { ...rest } = props;

	return <RaLinearProgress {...rest} />;
};
