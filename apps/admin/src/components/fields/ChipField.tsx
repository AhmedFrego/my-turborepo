import React from 'react';
import {
	ChipField as RaChipField,
	ChipFieldProps as RaChipFieldProps,
} from 'react-admin';
import { useValidResourceColumn } from 'src/hooks';

export interface ChipFieldProps extends RaChipFieldProps {}

export const ChipField: React.FC<ChipFieldProps> = props => {
	const { ...rest } = props;

	useValidResourceColumn(props);

	return <RaChipField {...rest} />;
};
