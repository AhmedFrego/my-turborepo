import { LanguageCodeEnum } from 'src/constants';
import {
	AdminRegistrationService,
	AdminService,
	NonJoinPublicTables,
	PublicTables,
} from 'src/types';

import { recordRepresentations } from '../resources/recordRepresentation';

export const isAdminRegistrationService = <T extends PublicTables>(
	config: AdminService<T>,
): config is AdminRegistrationService<T> =>
	'intent' in config && config.intent === 'registration';

export interface ResourcesContext {
	locale?: LanguageCodeEnum;
}

export const contextual_managed_admin = <T extends PublicTables = PublicTables>(
	config: AdminRegistrationService<T> | AdminService<T>,
	context?: ResourcesContext,
) => {
	const { name } = config;

	return {
		...config,
		recordRepresentation:
			recordRepresentations(context)[name as NonJoinPublicTables],
	};
};
