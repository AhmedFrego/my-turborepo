import React from 'react';
import { Title as RaTitle, TitleProps as RaTitleProps } from 'react-admin';

export interface TitleProps extends RaTitleProps {}

export const Title: React.FC<TitleProps> = props => {
	const { ...rest } = props;

	return <RaTitle {...rest} />;
};
