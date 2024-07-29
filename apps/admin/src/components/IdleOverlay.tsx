import Snooze from '@mui/icons-material/SnoozeTwoTone';
import { Backdrop, styled } from '@mui/material';
import React from 'react';
import { useIdle } from 'react-use';

/**Styling the Snooze icon with a vibrate animation */
const StyledSnooze = styled(Snooze)({
	'@keyframes vibrateAnimation': {
		'0%': {
			transform: 'translateX(0)',
		},
		'25%': {
			transform: 'translateX(2px) rotate(-1deg)',
		},
		'50%': {
			transform: 'translateX(-2px) rotate(1deg)',
		},
		'75%': {
			transform: 'translateX(2px) rotate(-1deg)',
		},
		'100%': {
			transform: 'translateX(-2px) rotate(1deg)',
		},
	},
	animation: 'vibrateAnimation 1s infinite',
});

interface IdleOverlayProps {
	/**
	 * The duration (in milliseconds) of user inactivity that triggers the idle state.
	 *
	 * @default 120e3
	 */
	idleTime?: number;
}

/**
 * Display an idle overlay when the user becomes idle for a specified duration.
 */
export const IdleOverlay: React.FC<IdleOverlayProps> = props => {
	const { idleTime = 120e3 } = props;

	const isIdle = useIdle(idleTime);

	return (
		<Backdrop
			open={isIdle}
			sx={{
				zIndex: theme => theme.zIndex.tooltip + 1,
			}}
			timeout={500}
		>
			<StyledSnooze
				color="disabled"
				sx={{ fontSize: 100 }}
			/>
		</Backdrop>
	);
};
