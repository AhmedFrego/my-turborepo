import { PrimaryKey } from '@raphiniert/ra-data-postgrest/lib/urlBuilder';
import { JoinPublicTables, Tables, UtilFieldsNames } from 'src/types';

type JoinTablesPrimaryKeys = {
	[T in JoinPublicTables]: [
		Exclude<keyof Tables<T>, UtilFieldsNames>,
		Exclude<keyof Tables<T>, UtilFieldsNames>,
	];
};

const joinTables: JoinTablesPrimaryKeys = {
	join_broker_feedback: ['broker_id', 'feedback_id'],
	join_certification_documents: ['certification_id', 'image_id'],
	join_department_employees: ['department_id', 'employee_id'],
	join_employee_documents: ['employee_id', 'image_id'],
	join_employee_health_conditions: ['condition_id', 'employee_id'],
	join_employee_nationalities: ['employee_id', 'nationality_id'],
	join_entity_employees: ['employee_id', 'entity_id'],
	join_expense_documents: ['expense_id', 'image_id'],
	join_factory_countries: ['factory_id', 'res_country_id'],
	join_factory_feedback: ['factory_id', 'feedback_id'],
	join_health_condition_documents: ['condition_id', 'image_id'],
	join_health_condition_medications: ['condition_id', 'medication_id'],
	join_insurance_company_feedback: ['feedback_id', 'insurance_company_id'],
	join_insurance_company_insurance_types: [
		'insurance_company_id',
		'insurance_type_id',
	],
	join_marriage_documents: ['marriage_id', 'image_id'],
	join_marriage_kids: ['kid_id', 'marriage_id'],
	join_offer_plan_providers: [
		'healthcare_service_provider_id',
		'insurance_offer_plan_id',
	],
	join_product_documents: ['product_id', 'image_id'],
	join_product_product_categories: ['product_id', 'product_category_id'],
	join_product_product_type_attribute_values: [
		'product_type_attribute_value_id',
		'product_id',
	],
	join_product_warehouses: ['product_id', 'warehouse_id'],
	join_provider_type: ['healthcare_provider_id', 'healthcare_type_id'],
	join_relative_documents: ['image_id', 'relative_id'],
	join_relative_health_conditions: ['condition_id', 'relative_id'],
	join_request_documents: ['request_id', 'image_id'],
	join_role_employees: ['employee_id', 'role_id'],
	join_ship_line_ports: ['port_id', 'ship_line_id'],
	join_shipping_company_countries: ['res_country_id', 'shipping_company_id'],
	join_training_trainees: ['employee_id', 'training_id'],
	join_training_trainers: ['employee_id', 'training_id'],
};

export const primaryKeys: Map<string, PrimaryKey> = new Map(
	Object.entries(joinTables),
);
