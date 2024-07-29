import React from 'react';
import { TitlePortal as RaTitlePortal } from 'react-admin';

export interface TitlePortalProps
	extends React.ComponentProps<typeof RaTitlePortal> {}

export const TitlePortal: React.FC<TitlePortalProps> = props => {
	const { ...rest } = props;

	return <RaTitlePortal {...rest} />;
};
