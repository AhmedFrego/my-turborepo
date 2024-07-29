import React from 'react';
import {
	SingleFieldList as RaSingleFieldList,
	SingleFieldListProps as RaSingleFieldListProps,
} from 'react-admin';

export interface SingleFieldListProps extends RaSingleFieldListProps {}

export const SingleFieldList: React.FC<SingleFieldListProps> = props => {
	const { ...rest } = props;

	return <RaSingleFieldList {...rest} />;
};
