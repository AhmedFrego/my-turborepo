import React from 'react';
import { Count as RaCount, CountProps as RaCountProps } from 'react-admin';
import { NonJoinPublicTables } from 'src/types';

export interface CountProps extends RaCountProps {
	resource?: NonJoinPublicTables;
}

export const Count: React.FC<CountProps> = props => {
	const { ...rest } = props;

	return <RaCount {...rest} />;
};
