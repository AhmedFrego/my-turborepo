import { EnumsTranslations } from '../types';

export const enumsMessages: EnumsTranslations = {
	enum: {
		entity_levels: {
			administration: 'प्रशासन',
			branch: 'शाखा',
			company: 'कंपनी',
		},
		genders: {
			female: 'महिला',
			male: 'पुरुष',
		},
		healthcare_provider_types: {
			clinic: 'क्लिनिक',
			clinics_complex: 'क्लीनिक कॉम्प्लेक्स',
			dental_clinic: 'दांता चिकित्सा अस्पताल',
			hospital: 'अस्पताल',
			laboratory: 'प्रयोगशाला',
			medical_association: 'मेडिकल एसोसिएशन',
			optical_center: 'प्रकाश केंद्र',
			pharmacy: 'फार्मेसी',
			physical_therapy_center: 'भौतिक चिकित्सा केंद्र',
			radiology_center: 'रेडियोलॉजी केंद्र',
			specialized_medical_center: 'विशेष चिकित्सा केंद्र',
		},
		healthcare_service_types: {
			emergency: 'आपातकाल',
			inpatient: 'रोगी',
			outpatient: 'आउट पेशेंट',
		},
		request_statuses: {
			approved: 'अनुमत',
			cancelled: 'रद्द',
			draft: 'मसौदा',
			in_review: 'समीक्षा में',
			need_more_info: 'अधिक जानकारी चाहिए',
			rejected: 'अस्वीकार कर दिया',
			submitted: 'प्रस्तुत',
		},
		separation_reasons: {
			divorced: 'तलाकशुदा',
			widowed: 'विधवा',
		},
	},
};
