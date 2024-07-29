/* eslint-disable sonarjs/no-duplicate-string */

import { EmployeeResourceConfig } from './resourcesTypes';

export const resources: Partial<EmployeeResourceConfig> = {
	base_call_for_action: {
		enabled: false,
		path: 'CFA',
	},
	base_complaints: {
		enabled: false,
		path: 'CFA/COMPLAINTS',
	},
	base_proposals: {
		enabled: false,
		path: 'CFA/PROPOSALS',
	},
	base_requests: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	complaints: {
		enabled: false,
		path: 'CFA/COMPLAINTS',
	},
	employees: {
		enabled: false,
		hasCreate: false,
		icon: 'AccountCircle',
	},
	proposals: {
		enabled: false,
		path: 'CFA/PROPOSALS',
	},
	request_advances: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	request_allowances: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	request_benefits: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	request_bonuses: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	request_commissions: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	request_delegations: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	request_expenses: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	request_external_delegations: {
		enabled: false,
		path: 'CFA/REQUESTS/request_delegations',
	},
	request_installments: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	request_internal_delegations: {
		enabled: false,
		path: 'CFA/REQUESTS/request_delegations',
	},
	request_payroll_deductions_cancels: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	request_permissions: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	request_promotions: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	request_punctuality_changes: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	request_purchases: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	request_resignations: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	request_retirement_age_extensions: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	request_salary_raises: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	request_settlements: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},

	request_transfers: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	request_vacations: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	request_work_hours_changes: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	requests: {
		enabled: false,
		path: 'CFA/REQUESTS',
	},
	types: {
		enabled: false,
		intent: true,
	},
};
