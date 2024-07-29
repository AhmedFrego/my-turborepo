import { EnumsTranslations } from '../types';

export const enumsMessages: EnumsTranslations = {
	enum: {
		entity_levels: {
			administration: 'administration',
			branch: 'Bifurquer',
			company: 'Entreprise',
		},
		genders: {
			female: 'Femelle',
			male: 'Femelle',
		},
		healthcare_provider_types: {
			clinic: 'Clinique',
			clinics_complex: 'Complexe de cliniques',
			dental_clinic: 'Cabinet dentaire',
			hospital: 'Hôpital',
			laboratory: 'Laboratoire',
			medical_association: 'Association médicale',
			optical_center: 'Centre optique',
			pharmacy: 'Pharmacie',
			physical_therapy_center: 'Centre de physiothérapie',
			radiology_center: 'Centre de radiologie',
			specialized_medical_center: 'Centre médical spécialisé',
		},
		healthcare_service_types: {
			emergency: 'Urgence',
			inpatient: 'Hospitalière',
			outpatient: 'Ambulatoire',
		},
		request_statuses: {
			approved: 'Approuvée',
			cancelled: 'Annulé',
			draft: 'Brouillon',
			in_review: 'En revue',
			need_more_info: "Besoin de plus d'informations",
			rejected: 'Rejetée',
			submitted: 'Soumise',
		},
		separation_reasons: {
			divorced: 'Divorcée',
			widowed: 'Veuve',
		},
	},
};
