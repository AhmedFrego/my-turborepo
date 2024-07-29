import { Chip, ChipProps } from '@mui/material';
import get from 'lodash/get';
import React from 'react';
import { AnyString, useTranslate } from 'src/hooks';
import { RequestStatuses } from 'src/types';

const colors: {
	[k in RequestStatuses]?: ChipProps['color'] | null;
} = {
	[RequestStatuses.approved]: 'success',
	[RequestStatuses.cancelled]: 'warning',
	[RequestStatuses.draft]: null,
	[RequestStatuses.rejected]: 'error',
};

export interface StatusChipProps {
	status: AnyString | ChipProps['color'] | null;
}

export const StatusChip: React.FC<StatusChipProps> = props => {
	const { status } = props;
	const translate = useTranslate();

	return typeof status === 'string' ? (
		<Chip
			color={get(colors, status, 'info')}
			label={translate(`enum.request_statuses.${status as RequestStatuses}`)}
			sx={{ mr: 1 }}
		/>
	) : null;
};
