import { EnterpriseMessages } from 'src/locales';

export const enterpriseMessages: EnterpriseMessages = {
	'ra-form-layout': {
		action: {
			bulk_update: 'به روزرسانی ٪ {منبع}',
			next: 'بعد',
			previous: 'قبلی',
		},
		autosave: {
			error: 'خطای سرور ، تغییرات ذخیره نمی شود: ٪ {خطا}',
			last_saved_at: 'همه تغییرات ذخیره شد',
			saving: 'صرفه جویی در...',
		},
		filters: {
			apply_filters: 'درخواست دادن',
			filters_button_label: 'فیلتر',
			operator: 'اپراتور',
			operators: {
				boolean: 'درست است',
				eq: 'برابر است',
				eq_any: 'برابر با هر',
				gt: 'بزرگتر از',
				inc: 'شامل می شود',
				inc_any: 'شامل هر',
				lt: 'کمتر از',
				neq: 'برابر نیست',
				neq_any: 'برابر نیست',
				ninc_any: 'شامل هیچ',
				q: 'حاوی',
			},
			remove_all_filters: 'تمام فیلترها را حذف کنید',
			source: 'منبع',
			value: 'ارزش',
		},
		input_selector_form: {
			select_inputs: 'زمینه ها را انتخاب کنید',
			select_values: 'مقادیر را انتخاب کنید',
		},
	},
	'ra-relationships': {
		duallistinput: {
			availableItems: 'موارد موجود',
			select: 'انتخاب کنید',
			selectedItems: 'آیتم های انتخاب شده',
			unselect: 'غیر منتخب',
		},
		referenceManyInput: {
			fetchError: 'خطای ارجاع',
			saveError: 'خطای سرور: تغییرات شما کاملاً ذخیره نشده است',
		},
	},
};
