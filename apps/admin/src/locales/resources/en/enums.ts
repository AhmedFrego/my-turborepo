import { EnumsTranslations } from '../types';

export const enumsMessages: EnumsTranslations = {
	enum: {
		entity_levels: {
			administration: 'Administration',
			branch: 'Branch',
			company: 'Company',
		},
		genders: {
			female: 'Female',
			male: 'Male',
		},
		healthcare_provider_types: {
			clinic: 'Clinic',
			clinics_complex: 'Clinics Complex',
			dental_clinic: 'Dental Clinic',
			hospital: 'Hospital',
			laboratory: 'Laboratory',
			medical_association: 'Medical Association',
			optical_center: 'Optical Center',
			pharmacy: 'Pharmacy',
			physical_therapy_center: 'Physical Therapy Center',
			radiology_center: 'Radiology Center',
			specialized_medical_center: 'Specialized Medical Center',
		},
		healthcare_service_types: {
			emergency: 'Emergency',
			inpatient: 'Inpatient',
			outpatient: 'Outpatient',
		},
		request_statuses: {
			approved: 'Approved',
			cancelled: 'Cancelled',
			draft: 'Draft',
			in_review: 'In Review',
			need_more_info: 'Need More Info',
			rejected: 'Rejected',
			submitted: 'Submitted',
		},
		separation_reasons: {
			divorced: 'Divorced',
			widowed: 'Widowed',
		},
	},
};
