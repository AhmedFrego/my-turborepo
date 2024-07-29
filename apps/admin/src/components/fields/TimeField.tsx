import React from 'react';
import { useValidResourceColumn } from 'src/hooks';

import { DateField, DateFieldProps } from './DateField';

export interface TimeFieldProps extends DateFieldProps {}

export const TimeField: React.FC<TimeFieldProps> = props => {
	useValidResourceColumn(props);

	return (
		<DateField
			showTime
			showDate={false}
			{...props}
		/>
	);
};
