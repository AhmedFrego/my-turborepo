import * as AdminRegistrationServices from './REGISTRATIONS';
import * as AdminServices from './services';

export type AdminServicesType = typeof AdminServices;
export type AdminRegistrationServicesType = typeof AdminRegistrationServices;

export type AdminServicesNames = {
	[k in keyof AdminServicesType]: AdminServicesType[k]['name'];
}[keyof AdminServicesType];

export * from './categorization';
export * as AdminRegistrationServices from './REGISTRATIONS';
export * as AdminServices from './services';
