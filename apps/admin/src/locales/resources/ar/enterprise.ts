import { EnterpriseMessages } from 'src/locales';

export const enterpriseMessages: EnterpriseMessages = {
	'ra-form-layout': {
		action: {
			bulk_update: 'تحديث {{resource}} المحدد',
			next: 'التالي',
			previous: 'سابق',
		},
		autosave: {
			error: 'خطأ في الخادم، لم يتم حفظ التغييرات: {{error}}',
			last_saved_at: 'تم حفظ جميع التغييرات',
			saving: 'إنقاذ...',
		},
		filters: {
			apply_filters: 'يتقدم',
			filters_button_label: 'المرشحات',
			operator: 'المشغل أو العامل',
			operators: {
				boolean: 'صحيح',
				eq: 'يساوي',
				eq_any: 'يساوي أي',
				gt: 'أكثر من',
				inc: 'يشمل',
				inc_any: 'يشمل أي',
				lt: 'أقل من',
				neq: 'لا يساوي',
				neq_any: 'لا يساوي أي',
				ninc_any: 'لا يشمل أي شيء',
				q: 'يتضمن',
			},
			remove_all_filters: 'قم بإزالة جميع المرشحات',
			source: 'مصدر',
			value: 'قيمة',
		},
		input_selector_form: {
			select_inputs: 'حدد الحقول',
			select_values: 'حدد القيم',
		},
	},
	'ra-rbac': {
		message: {
			unauthorized: 'لا يُسمح لك بالوصول إلى هذه الصفحة',
		},
		page: {
			unauthorized: 'غير مصرح',
		},
	},
	'ra-relationships': {
		duallistinput: {
			availableItems: 'القطع المتاحة',
			select: 'يختار',
			selectedItems: 'العناصر المختارة',
			unselect: 'قم بإلغاء التحديد',
		},
		referenceManyInput: {
			fetchError: 'حدث خطأ أثناء جلب المراجع',
			saveError: 'خطأ في الخادم: لم يتم حفظ تغييراتك بالكامل',
		},
	},
	'ra-search': {
		recent: 'مؤخرًا',
		result_one: '1 نتيجة',
		result_other: '{{count}} النتائج',
	},
};
