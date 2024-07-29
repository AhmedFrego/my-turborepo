import { EnumsTranslations } from '../types';

export const enumsMessages: EnumsTranslations = {
	enum: {
		entity_levels: {
			administration: 'Administración',
			branch: 'Rama',
			company: 'Compañía',
		},
		genders: {
			female: 'Femenina',
			male: 'Masculina',
		},
		healthcare_provider_types: {
			clinic: 'Clínica',
			clinics_complex: 'Complejo clínico',
			dental_clinic: 'Clínica dental',
			hospital: 'hospital',
			laboratory: 'Laboratorio',
			medical_association: 'Asociación médica',
			optical_center: 'Centro óptico',
			pharmacy: 'Farmacia',
			physical_therapy_center: 'Centro de fisioterapia',
			radiology_center: 'Centro de radiología',
			specialized_medical_center: 'Centro médico especializado',
		},
		healthcare_service_types: {
			emergency: 'Emergencia',
			inpatient: 'Paciente interno',
			outpatient: 'Paciente externo',
		},
		request_statuses: {
			approved: 'Aprobada',
			cancelled: 'Cancelada',
			draft: 'Borrador',
			in_review: 'En revisión',
			need_more_info: 'Necesito más información',
			rejected: 'Rechazada',
			submitted: 'Enviada',
		},
		separation_reasons: {
			divorced: 'Divorciada',
			widowed: 'Viuda',
		},
	},
};
