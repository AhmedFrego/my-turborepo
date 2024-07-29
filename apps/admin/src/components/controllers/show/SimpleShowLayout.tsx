import { SimpleShowLayout as RaSimpleShowLayout } from '@react-admin/ra-rbac';
import React from 'react';
import { SimpleShowLayoutProps as RaSimpleShowLayoutProps } from 'react-admin';

import { ShowContainer } from './ShowContainer';

export interface SimpleShowLayoutSlots {
	footer?: React.ReactNode;
	header?: React.ReactNode;
}

export interface SimpleShowLayoutProps extends RaSimpleShowLayoutProps {
	slots?: SimpleShowLayoutSlots;
}

export const SimpleShowLayout: React.FC<SimpleShowLayoutProps> = props => {
	const { children, slots = {}, ...rest } = props;
	const { footer, header } = slots;

	return (
		<RaSimpleShowLayout {...rest}>
			{header}
			<ShowContainer>{children}</ShowContainer>
			{footer}
		</RaSimpleShowLayout>
	);
};
