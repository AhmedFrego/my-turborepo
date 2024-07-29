import { useTheme } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useGetIdentity, useTranslate } from 'src/hooks';

export const TimeBasedGreeting = () => {
	const translate = useTranslate();
	const identity = useGetIdentity();

	const [period, setPeriod] = useState<'afternoon' | 'evening' | 'morning'>(
		'morning',
	);

	const updateGreeting = useCallback((time: Date) => {
		const hour = time.getHours();

		if (hour < 12) {
			setPeriod('morning');
		} else if (hour < 18) {
			setPeriod('afternoon');
		} else {
			setPeriod('evening');
		}
	}, []);

	useEffect(() => {
		const currentTime = new Date();

		updateGreeting(currentTime);
	}, [updateGreeting]);

	const theme = useTheme();

	return (
		<>
			{identity?.data ? (
				<TypeAnimation
					cursor={false}
					repeat={Number.POSITIVE_INFINITY}
					sequence={[
						translate(`greeting.${period}`, {
							fullName: String(identity.data?.fullName?.split(' ')[0]),
						}),
						1000,
					]}
					speed={40}
					style={{
						color: theme.palette.primary.main,
						display: 'inline-block',
						fontSize: theme.spacing(4),
						fontWeight: 600,
					}}
					wrapper="span"
				/>
			) : null}
		</>
	);
};
