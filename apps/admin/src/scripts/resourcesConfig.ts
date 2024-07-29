/* eslint-disable sonarjs/no-duplicate-string */
import { ResourcesConfig } from './resourcesTypes';

export const resources: ResourcesConfig = {
	addresses: {
		enabled: false,
		icon: 'LocationCity',
		recordRepresentation: 'street',
	},
	advances: {
		enabled: false,
		recordRepresentation: 'amount',
	},
	allowances: {
		enabled: false,
		recordRepresentation: 'suggested_amount',
	},
	announcements: {
		enabled: false,
		icon: 'Announcement',
		recordRepresentation: 'title',
	},
	attendances: {
		enabled: false,
		recordRepresentation: 'operation',
	},
	base_call_for_action: {
		enabled: false,
		path: 'CFA',
		recordRepresentation: 'title',
	},
	base_complaints: {
		enabled: false,
		path: 'CFA/COMPLAINTS',
		recordRepresentation: 'title',
	},
	base_proposals: {
		enabled: false,
		path: 'CFA/PROPOSALS',
		recordRepresentation: 'title',
	},
	base_requests: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	bonuses: {
		enabled: false,
		recordRepresentation: 'reason',
	},
	certifications: {
		enabled: false,
		icon: 'CardMembership',
		recordRepresentation: 'name',
	},
	commissions: {
		enabled: false,
		recordRepresentation: 'reason',
	},
	complaints: {
		enabled: false,
		icon: 'Report',
		path: 'CFA/COMPLAINTS',
		recordRepresentation: 'title',
	},
	contact_information: {
		enabled: false,
		recordRepresentation: 'email',
	},
	contracts: {
		enabled: false,
		icon: 'Assignment',
		recordRepresentation: 'salary',
	},
	deductions: {
		enabled: false,
		recordRepresentation: 'amount',
	},
	departments: {
		enabled: false,
		icon: 'Category',
		recordRepresentation: 'name',
	},
	driver_licenses: {
		enabled: false,
		icon: 'TimeToLeave',
		recordRepresentation: 'date_of_expiry',
	},
	emergency_contacts: {
		enabled: false,
		icon: 'ContactPhone',
		recordRepresentation: 'name',
	},
	employee_reports: {
		enabled: false,
		icon: 'Assessment',
		recordRepresentation: 'quarter',
	},
	employees: {
		enabled: false,
		hasCreate: false,
		icon: 'AccountCircle',
		recordRepresentation: 'full_name',
	},
	entities: {
		enabled: false,
		icon: 'CorporateFare',
		path: 'ENTITIES',
		recordRepresentation: 'name',
	},
	entity_types: {
		enabled: false,
		path: 'ENTITIES',
		recordRepresentation: 'name',
	},
	expenses: {
		enabled: false,
		recordRepresentation: 'title',
	},
	group_invites: {
		enabled: false,
	},
	group_users: {
		enabled: false,
	},
	groups: {
		enabled: false,
	},
	health_reports: {
		enabled: false,
		recordRepresentation: 'year',
	},
	identification_cards: {
		enabled: false,
		icon: 'LocalPolice',
		recordRepresentation: 'id_number',
	},
	images: {
		enabled: false,
		icon: 'Image',
		recordRepresentation: 'description',
	},
	insurance_reports: {
		enabled: false,
		hasShow: false,
		recordRepresentation: 'created_at',
	},
	job_titles: {
		enabled: false,
		icon: 'SensorOccupied',
		recordRepresentation: 'name',
	},
	join_broker_feedback: {
		enabled: false,
		intent: true,
	},
	join_certification_documents: {
		enabled: false,
		intent: true,
	},
	join_department_employees: {
		enabled: false,
		intent: true,
	},
	join_employee_documents: {
		enabled: false,
		intent: true,
	},
	join_employee_health_conditions: {
		enabled: false,
		intent: true,
	},
	join_employee_nationalities: {
		enabled: false,
		intent: true,
	},
	join_entity_employees: {
		enabled: false,
		intent: true,
	},
	join_expense_documents: {
		enabled: false,
		intent: true,
	},
	join_factory_countries: {
		enabled: false,
		intent: true,
	},
	join_factory_feedback: {
		enabled: false,
		intent: true,
	},
	join_health_condition_documents: {
		enabled: false,
		intent: true,
	},
	join_health_condition_medications: {
		enabled: false,
		intent: true,
	},
	join_insurance_company_feedback: {
		enabled: false,
		intent: true,
	},
	join_insurance_company_insurance_types: {
		enabled: false,
		intent: true,
	},
	join_marriage_documents: {
		enabled: false,
		intent: true,
	},
	join_marriage_kids: {
		enabled: false,
		intent: true,
	},
	join_offer_plan_providers: {
		enabled: false,
		intent: true,
	},
	join_product_documents: {
		enabled: false,
		intent: true,
	},
	join_product_product_categories: {
		enabled: false,
		intent: true,
	},
	join_product_product_type_attribute_values: {
		enabled: false,
		intent: true,
	},
	join_product_warehouses: {
		enabled: false,
		intent: true,
	},
	join_provider_type: {
		enabled: false,
		intent: true,
	},
	join_relative_documents: {
		enabled: false,
		intent: true,
	},
	join_relative_health_conditions: {
		enabled: false,
		intent: true,
	},
	join_request_documents: {
		enabled: false,
		intent: true,
	},
	join_role_employees: {
		enabled: false,
		intent: true,
	},
	join_ship_line_ports: {
		enabled: false,
		intent: true,
	},
	join_shipping_company_countries: {
		enabled: false,
		intent: true,
	},
	join_training_trainees: {
		enabled: false,
		intent: true,
	},
	join_training_trainers: {
		enabled: false,
		intent: true,
	},
	jsonschema_validators: {
		enabled: false,
		recordRepresentation: 'schema_name',
	},
	options: {
		enabled: false,
		recordRepresentation: 'name',
	},
	passports: {
		enabled: false,
		icon: 'AirplanemodeActive',
		recordRepresentation: 'place_of_issue_id',
	},
	payroll_deductions: {
		enabled: false,
		recordRepresentation: 'payroll_deduction_type_id',
	},
	policies: {
		enabled: false,
		icon: 'Policy',
		path: 'ENTITIES',
		recordRepresentation: 'owner_id',
	},
	proposals: {
		enabled: false,
		icon: 'SettingsSuggest',
		path: 'CFA/PROPOSALS',
		recordRepresentation: 'title',
	},
	request_advances: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	request_allowances: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	request_benefits: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	request_bonuses: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	request_commissions: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	request_delegations: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	request_expenses: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	request_external_delegations: {
		enabled: false,
		path: 'CFA/REQUESTS/request_delegations',
		recordRepresentation: 'title',
	},
	request_installments: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	request_internal_delegations: {
		enabled: false,
		path: 'CFA/REQUESTS/request_delegations',
		recordRepresentation: 'title',
	},
	request_payroll_deductions_cancels: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	request_permissions: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	request_promotions: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	request_punctuality_changes: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	request_purchases: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	request_resignations: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	request_retirement_age_extensions: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	request_salary_raises: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	request_settlements: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},

	request_transfers: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	request_vacations: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	request_work_hours_changes: {
		enabled: false,
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	requests: {
		enabled: false,
		icon: 'PlaylistAddCheckCircle',
		path: 'CFA/REQUESTS',
		recordRepresentation: 'title',
	},
	res_cities: {
		enabled: false,
		hasCreate: false,
		hasEdit: false,
		icon: 'Flag',
		recordRepresentation: 'city_ascii',
	},
	res_countries: {
		enabled: false,
		hasCreate: false,
		hasEdit: false,
		icon: 'Public',
		recordRepresentation: 'name',
	},
	res_currencies: {
		enabled: false,
		hasCreate: false,
		hasEdit: false,
		icon: 'Public',
		recordRepresentation: 'name',
	},
	residencies: {
		enabled: false,
		icon: 'AddHomeWork',
		recordRepresentation: 'to',
	},
	sponsors: {
		enabled: false,
		recordRepresentation: 'entity_id',
	},
	status_histories: {
		enabled: false,
		recordRepresentation: 'message',
	},
	survey_answers: {
		enabled: false,
		hasCreate: false,
		icon: 'Poll',
		recordRepresentation: 'survey_id',
	},
	surveys: {
		enabled: false,
		icon: 'Poll',
		recordRepresentation: 'name',
	},
	template: {
		enabled: false,
	},
	types: {
		enabled: false,
		icon: 'Hive',
		recordRepresentation: 'name',
	},
	vacations: {
		enabled: false,
		icon: 'BeachAccess',
		recordRepresentation: 'to',
	},
	visas: {
		enabled: false,
		icon: 'VpnKeyOff',
		recordRepresentation: 'to',
	},
	work_hours: {
		enabled: false,
		icon: 'WatchLater',
		recordRepresentation: 'id',
	},
	work_locations: {
		enabled: false,
		icon: 'PinDrop',
		recordRepresentation: 'name',
	},
};
