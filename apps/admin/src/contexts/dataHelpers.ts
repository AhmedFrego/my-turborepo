import { supabase } from '../providers/supabase';

export const employeeEntitiesQuery = (id: string) =>
	supabase
		.from('join_entity_employees')
		.select('*,entities!join_entity_employees_entity_id_fkey(*)')
		.eq('employee_id', id);

export const employeeRolesQuery = (id: string, current: string) =>
	supabase
		.from('join_role_employees')
		.select('*,roles!join_role_employees_role_id_fkey(*)')
		.eq('employee_id', id)
		.eq('roles.owner_id', current)
		.not('roles', 'is', null);

export const employeeQuery = (id: string) =>
	supabase.from('employees').select().eq('id', id).single();

export const contractQuery = (id: string) =>
	supabase
		.from('contracts')
		.select('*,job_titles!contracts_job_title_id_fkey(*)')
		.eq('employee_id', id);
