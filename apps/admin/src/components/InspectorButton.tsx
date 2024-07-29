import React from 'react';
import { InspectorButton as RaInspectorButton } from 'react-admin';

export interface InspectorButtonProps
	extends React.ComponentProps<typeof RaInspectorButton> {}

export const InspectorButton: React.FC<InspectorButtonProps> = props => {
	const { ...rest } = props;

	return <RaInspectorButton {...rest} />;
};
