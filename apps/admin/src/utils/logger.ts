import * as Sentry from '@sentry/react';
import isObject from 'lodash/isObject';
import { appName, isDevelopment } from 'src/constants';

export const logErrors = (...args: unknown[]) => {
	for (const error of args) {
		if (isObject(error) && 'message' in error) Sentry.captureException(error);
	}
};

export const logMessages = (...args: unknown[]) => {
	for (const message of args) {
		if (typeof message === 'string') Sentry.captureMessage(message);
	}
};

const prepareMessages = (...args: unknown[]) => {
	return args
		.map(argument => {
			if (typeof argument === 'object') {
				try {
					return JSON.stringify(argument, null, 2);
				} catch {
					return 'Not serializable Object';
				}
			}

			return String(argument);
		})
		.join(' ');
};

const prepareName = (name: string) => name;

export const createLogger = (name: string) => {
	const preparedName = prepareName(name);

	return isDevelopment
		? {
				error: (...args: unknown[]) => {
					console.error(prepareMessages(preparedName, args));
				},
				log: (...args: unknown[]) => {
					console.log(prepareMessages(preparedName, args));
				},
			}
		: {
				error: (...args: unknown[]) => {
					logErrors(preparedName, ...args);
				},
				log: (...args: unknown[]) => {
					logErrors(preparedName, ...args);
					logMessages(preparedName, ...args);
				},
			};
};

export const Logger = createLogger(`[${appName}]`);
