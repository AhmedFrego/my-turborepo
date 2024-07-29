import { Box, Typography } from '@mui/material';
import { RaRecord, useRecordContext, useTranslate } from 'src/hooks';
import { FieldProps, RequestStatuses } from 'src/types';
import { statusToColor, statusToIcon } from 'src/utils';
import { SetRequired } from 'type-fest';

export const RequestStatusField = (
	props: SetRequired<
		FieldProps<RaRecord & Record<string, RequestStatuses>>,
		'source'
	>,
) => {
	const { source } = props;
	const translate = useTranslate();

	const record = useRecordContext<
		RaRecord & Record<typeof source, RequestStatuses>
	>(props);

	const status = record?.[source];

	if (!status) return null;

	const Icon = statusToIcon(status);

	return (
		<Box
			alignItems="center"
			display="flex"
		>
			<Icon
				color={statusToColor(status)}
				sx={{ mr: 1 }}
			/>
			<Typography
				component="span"
				variant="body2"
			>
				{translate(`enum.request_statuses.${status}`)}
			</Typography>
		</Box>
	);
};
