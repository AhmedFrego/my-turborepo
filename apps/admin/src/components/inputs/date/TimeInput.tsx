import React from 'react';
import { useValidResourceColumn } from 'src/hooks';

import {
	TimeInput as MuiTimeInput,
	TimeInputProps as RaTimeInputProps,
} from './mui';
import { GridWrapper, GridWrapperProps } from '../GridWrapper';

export interface TimeInputProps extends RaTimeInputProps, GridWrapperProps {}

export const TimeInput: React.FC<TimeInputProps> = props => {
	const { grid, ...rest } = props;

	useValidResourceColumn(props);

	return (
		<GridWrapper grid={grid}>
			<MuiTimeInput {...rest} />
		</GridWrapper>
	);
};
