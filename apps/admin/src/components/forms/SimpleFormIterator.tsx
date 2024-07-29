import { styled } from '@mui/material';
import React from 'react';
import {
	SimpleFormIterator as RaSimpleFormIterator,
	SimpleFormIteratorProps as RaSimpleFormIteratorProps,
	SimpleFormIteratorClasses,
	SimpleFormIteratorPrefix,
} from 'react-admin';

export interface SimpleFormIteratorProps extends RaSimpleFormIteratorProps {}

export const SimpleFormIterator: React.FC<SimpleFormIteratorProps> = props => {
	const { ...rest } = props;

	return (
		<EditRoot>
			<RaSimpleFormIterator {...rest} />
		</EditRoot>
	);
};

const EditRoot = styled('div', {
	name: SimpleFormIteratorPrefix,
	overridesResolver: (_, styles) => styles.root,
})(() => ({
	[`& .${SimpleFormIteratorClasses.inline}`]: {
		display: 'block !important',
		width: '100%',
	},
}));
