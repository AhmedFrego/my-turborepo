/** this file is auto generated, don't touch it **/

import {
	addresses,
	advances,
	allowances,
	announcements,
	attendances,
	audit_log_entries,
	base_call_for_action,
	base_complaints,
	base_proposals,
	base_requests,
	bonuses,
	buckets,
	certifications,
	commissions,
	complaints,
	contact_information,
	contracts,
	deductions,
	departments,
	driver_licenses,
	emergency_contacts,
	employee_reports,
	employees,
	entities,
	entity_types,
	expenses,
	flow_state,
	health_reports,
	identification_cards,
	identities,
	images,
	instances,
	insurance_reports,
	job_titles,
	join_broker_feedback,
	join_certification_documents,
	join_department_employees,
	join_employee_documents,
	join_employee_health_conditions,
	join_employee_nationalities,
	join_entity_employees,
	join_expense_documents,
	join_factory_countries,
	join_factory_feedback,
	join_health_condition_documents,
	join_health_condition_medications,
	join_insurance_company_feedback,
	join_insurance_company_insurance_types,
	join_marriage_documents,
	join_marriage_kids,
	join_offer_plan_providers,
	join_product_documents,
	join_product_product_categories,
	join_product_product_type_attribute_values,
	join_product_warehouses,
	join_provider_type,
	join_relative_documents,
	join_relative_health_conditions,
	join_request_documents,
	join_role_employees,
	join_ship_line_ports,
	join_shipping_company_countries,
	join_training_trainees,
	join_training_trainers,
	jsonschema_validators,
	medications,
	mfa_amr_claims,
	mfa_challenges,
	mfa_factors,
	migrations,
	objects,
	one_time_tokens,
	options,
	passports,
	payroll_deductions,
	policies,
	product_categories,
	product_tags,
	product_type_attribute_values,
	product_type_attributes,
	product_types,
	products,
	proposals,
	refresh_tokens,
	relatives,
	request_advances,
	request_allowances,
	request_benefits,
	request_bonuses,
	request_commissions,
	request_delegations,
	request_expenses,
	request_external_delegations,
	request_installments,
	request_internal_delegations,
	request_payroll_deductions_cancels,
	request_permissions,
	request_promotions,
	request_punctuality_changes,
	request_purchases,
	request_resignations,
	request_retirement_age_extensions,
	request_salary_raises,
	request_settlements,
	request_transfers,
	request_vacations,
	request_work_hours_changes,
	requests,
	res_cities,
	res_countries,
	res_currencies,
	residencies,
	s3_multipart_uploads,
	s3_multipart_uploads_parts,
	saml_providers,
	saml_relay_states,
	schema_migrations,
	sessions,
	sponsors,
	sso_domains,
	sso_providers,
	status_histories,
	survey_answers,
	surveys,
	template,
	types,
	users,
	vacations,
	visas,
	work_hours,
	work_locations,
} from '@prisma/client';

export type SubjectsList = {
	addresses: addresses;
	advances: advances;
	allowances: allowances;
	announcements: announcements;
	attendances: attendances;
	audit_log_entries: audit_log_entries;
	base_call_for_action: base_call_for_action;
	base_complaints: base_complaints;
	base_proposals: base_proposals;
	base_requests: base_requests;
	bonuses: bonuses;
	buckets: buckets;
	certifications: certifications;
	commissions: commissions;
	complaints: complaints;
	contact_information: contact_information;
	contracts: contracts;
	deductions: deductions;
	departments: departments;
	driver_licenses: driver_licenses;
	emergency_contacts: emergency_contacts;
	employee_reports: employee_reports;
	employees: employees;
	entities: entities;
	entity_types: entity_types;
	expenses: expenses;
	flow_state: flow_state;
	health_reports: health_reports;
	identification_cards: identification_cards;
	identities: identities;
	images: images;
	instances: instances;
	insurance_reports: insurance_reports;
	job_titles: job_titles;
	join_broker_feedback: join_broker_feedback;
	join_certification_documents: join_certification_documents;
	join_department_employees: join_department_employees;
	join_employee_documents: join_employee_documents;
	join_employee_health_conditions: join_employee_health_conditions;
	join_employee_nationalities: join_employee_nationalities;
	join_entity_employees: join_entity_employees;
	join_expense_documents: join_expense_documents;
	join_factory_countries: join_factory_countries;
	join_factory_feedback: join_factory_feedback;
	join_health_condition_documents: join_health_condition_documents;
	join_health_condition_medications: join_health_condition_medications;
	join_insurance_company_feedback: join_insurance_company_feedback;
	join_insurance_company_insurance_types: join_insurance_company_insurance_types;
	join_marriage_documents: join_marriage_documents;
	join_marriage_kids: join_marriage_kids;
	join_offer_plan_providers: join_offer_plan_providers;
	join_product_documents: join_product_documents;
	join_product_product_categories: join_product_product_categories;
	join_product_product_type_attribute_values: join_product_product_type_attribute_values;
	join_product_warehouses: join_product_warehouses;
	join_provider_type: join_provider_type;
	join_relative_documents: join_relative_documents;
	join_relative_health_conditions: join_relative_health_conditions;
	join_request_documents: join_request_documents;
	join_role_employees: join_role_employees;
	join_ship_line_ports: join_ship_line_ports;
	join_shipping_company_countries: join_shipping_company_countries;
	join_training_trainees: join_training_trainees;
	join_training_trainers: join_training_trainers;
	jsonschema_validators: jsonschema_validators;
	medications: medications;
	mfa_amr_claims: mfa_amr_claims;
	mfa_challenges: mfa_challenges;
	mfa_factors: mfa_factors;
	migrations: migrations;
	objects: objects;
	one_time_tokens: one_time_tokens;
	options: options;
	passports: passports;
	payroll_deductions: payroll_deductions;
	policies: policies;
	product_categories: product_categories;
	product_tags: product_tags;
	product_type_attribute_values: product_type_attribute_values;
	product_type_attributes: product_type_attributes;
	product_types: product_types;
	products: products;
	proposals: proposals;
	refresh_tokens: refresh_tokens;
	relatives: relatives;
	request_advances: request_advances;
	request_allowances: request_allowances;
	request_benefits: request_benefits;
	request_bonuses: request_bonuses;
	request_commissions: request_commissions;
	request_delegations: request_delegations;
	request_expenses: request_expenses;
	request_external_delegations: request_external_delegations;
	request_installments: request_installments;
	request_internal_delegations: request_internal_delegations;
	request_payroll_deductions_cancels: request_payroll_deductions_cancels;
	request_permissions: request_permissions;
	request_promotions: request_promotions;
	request_punctuality_changes: request_punctuality_changes;
	request_purchases: request_purchases;
	request_resignations: request_resignations;
	request_retirement_age_extensions: request_retirement_age_extensions;
	request_salary_raises: request_salary_raises;
	request_settlements: request_settlements;
	request_transfers: request_transfers;
	request_vacations: request_vacations;
	request_work_hours_changes: request_work_hours_changes;
	requests: requests;
	res_cities: res_cities;
	res_countries: res_countries;
	res_currencies: res_currencies;
	residencies: residencies;
	s3_multipart_uploads: s3_multipart_uploads;
	s3_multipart_uploads_parts: s3_multipart_uploads_parts;
	saml_providers: saml_providers;
	saml_relay_states: saml_relay_states;
	schema_migrations: schema_migrations;
	sessions: sessions;
	sponsors: sponsors;
	sso_domains: sso_domains;
	sso_providers: sso_providers;
	status_histories: status_histories;
	survey_answers: survey_answers;
	surveys: surveys;
	template: template;
	types: types;
	users: users;
	vacations: vacations;
	visas: visas;
	work_hours: work_hours;
	work_locations: work_locations;
};
