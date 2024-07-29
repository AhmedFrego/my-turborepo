import React from 'react';
import {
	Notification as RaNotification,
	NotificationProps as RaNotificationProps,
} from 'react-admin';

export interface NotificationProps extends RaNotificationProps {}

export const Notification: React.FC<NotificationProps> = props => {
	const { ...rest } = props;

	return <RaNotification {...rest} />;
};
