import React from 'react';
import { LoadingIndicator as RaLoadingIndicator } from 'react-admin';

export interface LoadingIndicatorProps
	extends React.ComponentProps<typeof RaLoadingIndicator> {}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = props => {
	const { ...rest } = props;

	return <RaLoadingIndicator {...rest} />;
};
