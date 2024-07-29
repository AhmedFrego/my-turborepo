import {
	type AdminRegistrationService,
	type AdminService,
	type PublicTables,
} from 'src/types';

export const managed_admin = <T extends PublicTables>(
	config: AdminRegistrationService<T> | AdminService<T>,
): AdminRegistrationService<T> | AdminService<T> => config;
