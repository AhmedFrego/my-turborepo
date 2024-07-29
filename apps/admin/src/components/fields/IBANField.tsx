import { Typography } from '@mui/material';
import { friendlyFormatIBAN, isValidIBAN } from 'ibantools';
import { useRecordContext, useValidManyResourceColumn } from 'src/hooks';

export const IBANField = (props: { source: 'iban' }) => {
	const { source } = props;
	const record = useRecordContext<{ iban: string }>(props);

	useValidManyResourceColumn(props);

	const value = String(record?.[source]).replaceAll(' ', '');

	return (
		<Typography
			component="span"
			sx={{ color: isValidIBAN(value) ? undefined : 'red' }}
			variant="body2"
		>
			{friendlyFormatIBAN(value)}
		</Typography>
	);
};
