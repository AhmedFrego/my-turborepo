import React from 'react';
import { Empty as RaEmpty, EmptyProps as RaEmptyProps } from 'react-admin';

export interface EmptyProps extends RaEmptyProps {}

export const Empty: React.FC<EmptyProps> = props => {
	const { ...rest } = props;

	return <RaEmpty {...rest} />;
};
