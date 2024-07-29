import { EnumsTranslations } from '../types';

export const enumsMessages: EnumsTranslations = {
	enum: {
		entity_levels: {
			administration: '行政',
			branch: '分支',
			company: '公司',
		},
		genders: {
			female: '女性',
			male: '男性',
		},
		healthcare_provider_types: {
			clinic: '诊所',
			clinics_complex: '诊所综合体',
			dental_clinic: '牙科诊所',
			hospital: '医院',
			laboratory: '实验室',
			medical_association: '医学协会',
			optical_center: '光学中心',
			pharmacy: '药店',
			physical_therapy_center: '物理治疗中心',
			radiology_center: '放射学中心',
			specialized_medical_center: '专业医疗中心',
		},
		healthcare_service_types: {
			emergency: '紧急情况',
			inpatient: '住院',
			outpatient: '门诊',
		},
		request_statuses: {
			approved: '得到正式认可的',
			cancelled: '取消',
			draft: '草稿',
			in_review: '在评论中',
			need_more_info: '需要更多信息',
			rejected: '拒绝',
			submitted: '提交',
		},
		separation_reasons: {
			divorced: '离婚',
			widowed: '寡',
		},
	},
};
