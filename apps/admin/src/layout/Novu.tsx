import { IconButton, useTheme } from '@mui/material';
import {
	ColorScheme,
	IMessage,
	NotificationBell,
	PopoverNotificationCenter,
} from '@novu/notification-center';
import React from 'react';
import { useBasename } from 'react-admin';
import { useNavigate } from 'react-router-dom';

export interface NovuProps {}

export const Novu: React.FC<NovuProps> = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const basename = useBasename();

	const handleOnNotificationClick = (message: IMessage) => {
		if (message?.cta?.data?.url) {
			navigate(basename + message.cta.data.url);
		}
	};

	return (
		<PopoverNotificationCenter
			colorScheme={theme.palette.mode as ColorScheme}
			onNotificationClick={handleOnNotificationClick}
		>
			{props => (
				<IconButton component="span">
					<NotificationBell {...props} />
				</IconButton>
			)}
		</PopoverNotificationCenter>
	);
};
