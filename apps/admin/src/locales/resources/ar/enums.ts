import { EnumsTranslations } from '../types';

export const enumsMessages: EnumsTranslations = {
	enum: {
		entity_levels: {
			administration: 'إدارة',
			branch: 'فرع',
			company: 'شركة',
		},
		genders: {
			female: 'أنثى',
			male: 'ذكر',
		},
		healthcare_provider_types: {
			clinic: 'عيادة',
			clinics_complex: 'مجمع العيادات',
			dental_clinic: 'عيادة اسنان',
			hospital: 'مستشفى',
			laboratory: 'معمل',
			medical_association: 'الجمعية الطبية',
			optical_center: 'المركز البصري',
			pharmacy: 'مقابل',
			physical_therapy_center: 'مركز العلاج الطبيعي',
			radiology_center: 'مركز الأشعة',
			specialized_medical_center: 'المركز الطبي المتخصص',
		},
		healthcare_service_types: {
			emergency: 'طارئ',
			inpatient: 'العيادات الداخلية',
			outpatient: 'العيادات الخارجية',
		},
		request_statuses: {
			approved: 'موافقة',
			cancelled: 'ألغيت',
			draft: 'مسودة',
			in_review: 'في مراجعة',
			need_more_info: 'بحاجة إلى مزيد من المعلومات',
			rejected: 'مرفوض',
			submitted: 'مُقَدَّم',
		},
		separation_reasons: {
			divorced: 'مُطلّق',
			widowed: 'الأرامل',
		},
	},
};
