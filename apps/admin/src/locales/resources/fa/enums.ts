import { EnumsTranslations } from '../types';

export const enumsMessages: EnumsTranslations = {
	enum: {
		entity_levels: {
			administration: 'مدیریت',
			branch: 'شاخه',
			company: 'شرکت',
		},
		genders: {
			female: 'زن',
			male: 'نر',
		},
		healthcare_provider_types: {
			clinic: 'درمانگاه',
			clinics_complex: 'کلینیک ها',
			dental_clinic: 'کلینیک دندانپزشکی',
			hospital: 'بیمارستان',
			laboratory: 'آزمایشگاه',
			medical_association: 'انجمن پزشکی',
			optical_center: 'مرکز نوری',
			pharmacy: 'داروخانه',
			physical_therapy_center: 'مرکز درمانی',
			radiology_center: 'مرکز رادیولوژی',
			specialized_medical_center: 'مرکز پزشکی تخصصی',
		},
		healthcare_service_types: {
			emergency: 'اضطراری',
			inpatient: 'بستری',
			outpatient: 'سرپایی',
		},
		request_statuses: {
			approved: 'تایید شده',
			cancelled: 'لغو شد',
			draft: 'پیش نویس',
			in_review: 'در بررسی',
			need_more_info: 'به اطلاعات بیشتر نیاز دارید',
			rejected: 'رد شده',
			submitted: 'ارسال شده',
		},
		separation_reasons: {
			divorced: 'جدا شده',
			widowed: 'بیوه',
		},
	},
};
