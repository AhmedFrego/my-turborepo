import get from 'lodash/get';
import { userLocale } from 'src/hooks';
import { NonJoinPublicTables, RecordRepresentation } from 'src/types';
import { ResourcesContext } from 'src/utils';

export type RecordRepresentations = {
	[k in NonJoinPublicTables]?: RecordRepresentation<k>;
};

export const recordRepresentations = (
	context?: ResourcesContext,
): RecordRepresentations => {
	const { locale = userLocale } = context ?? {};

	return {
		addresses: 'street',
		advances: 'amount',
		allowances: 'date_of_received',
		announcements: 'title',
		attendances: 'id',
		base_call_for_action: 'title',
		base_complaints: 'title',
		base_proposals: 'title',
		base_requests: 'title',
		beneficiaries: 'name',
		bonuses: 'reason',
		certifications: 'name',
		commissions: 'amount',
		complaints: 'title',
		contact_information: 'email',
		contracts: 'date_of_start',
		deductions: 'amount',
		departments: 'name',
		driver_licenses: 'date_of_expiry',
		emergency_contacts: 'name',
		employee_reports: 'created_by',
		employees: record => {
			const { full_name, id, username } = record;

			return full_name ?? username ?? id;
		},
		entities: 'name',
		entity_types: `name.${locale}`,
		expenses: 'title',
		health_reports: 'year',
		identification_cards: 'id_number',
		images: 'description',
		insurance_reports: 'year',
		job_titles: `name.${locale}`,
		jsonschema_validators: 'schema_name',
		kids: 'name',
		options: 'name',
		passports: 'job_title',
		payroll_deductions: 'amount',
		policies: 'id',
		proposals: 'title',
		relatives: 'name',
		request_advances: 'title',
		request_allowances: 'title',
		request_benefits: 'title',
		request_bonuses: 'title',
		request_commissions: 'title',
		request_delegations: 'title',
		request_expenses: 'title',
		request_external_delegations: 'title',
		request_installments: 'title',
		request_internal_delegations: 'title',
		request_payroll_deductions_cancels: 'title',
		request_permissions: 'title',
		request_promotions: 'title',
		request_punctuality_changes: 'title',
		request_purchases: 'title',
		request_resignations: 'title',
		request_retirement_age_extensions: 'title',
		request_salary_raises: 'title',
		request_settlements: 'title',

		request_transfers: 'title',
		request_vacations: 'title',
		request_work_hours_changes: 'title',
		requests: 'title',
		res_cities: 'city_ascii',
		res_countries: 'name',
		res_currencies: 'name',
		residencies: record => {
			const from = get(record, 'to');

			return new Date(String(from)).toLocaleDateString(locale);
		},
		sponsors: 'entity_id',
		spouses: 'name',
		status_histories: 'message',
		survey_answers: 'survey_id',
		surveys: 'name',
		template: 'id',
		types: `name.${locale}`,
		vacations: record => {
			const from = get(record, 'to');

			return new Date(String(from)).toLocaleDateString(locale);
		},
		visas: record => {
			const from = get(record, 'to');

			return new Date(String(from)).toLocaleDateString(locale);
		},
		work_hours: record => {
			const from = get(record, 'from');

			return new Date(String(from)).toLocaleTimeString(locale);
		},
		work_locations: 'name',
	};
};
