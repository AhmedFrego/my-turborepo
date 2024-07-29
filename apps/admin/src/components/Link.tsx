import React from 'react';
import { Link as RaLink, LinkProps as RaLinkProps } from 'react-admin';

export interface LinkProps extends RaLinkProps {}

export const Link: React.FC<LinkProps> = props => {
	const { ...rest } = props;

	return <RaLink {...rest} />;
};
