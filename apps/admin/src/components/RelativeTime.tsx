import { Typography } from '@mui/material';
import { formatDistanceToNow } from 'date-fns';
import React from 'react';
import { useLocale } from 'src/hooks';

export interface RelativeTimeProps {
	/**
	 *  The date to display a relative time for.
	 */
	date: Date | string;
}

/**
 * Display a relative time based on the given date.
 */
export const RelativeTime: React.FC<RelativeTimeProps> = props => {
	const { date } = props;
	const { fns, locale } = useLocale();

	const dateObject = new Date(date);

	return (
		<Typography
			component="span"
			title={dateObject.toLocaleString(locale)}
			variant="body2"
		>
			{formatDistanceToNow(dateObject, {
				addSuffix: true,
				locale: fns,
			})}
		</Typography>
	);
};
