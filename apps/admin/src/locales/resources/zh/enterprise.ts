import { EnterpriseMessages } from 'src/locales';

export const enterpriseMessages: EnterpriseMessages = {
	'ra-form-layout': {
		action: {
			bulk_update: '更新选择 {{resource}}',
			next: '下一个',
			previous: '以前的',
		},
		autosave: {
			error: '服务器错误，不保存更改：{{error}}',
			last_saved_at: '所有更改均保存',
			saving: '保存...',
		},
		filters: {
			apply_filters: '申请',
			filters_button_label: '过滤器',
			operator: '操作员',
			operators: {
				boolean: '是真的',
				eq: '等于',
				eq_any: '等于任何',
				gt: '比...更棒',
				inc: '包括',
				inc_any: '包括任何',
				lt: '少于',
				neq: '不平等',
				neq_any: '不等于任何',
				ninc_any: '包括不包括',
				q: '包含',
			},
			remove_all_filters: '卸下所有过滤器',
			source: '来源',
			value: '价值',
		},
		input_selector_form: {
			select_inputs: '选择字段',
			select_values: '选择值',
		},
	},
	'ra-relationships': {
		duallistinput: {
			availableItems: '可用的项目',
			select: '选择',
			selectedItems: '选定的项目',
			unselect: '取消选择',
		},
		referenceManyInput: {
			fetchError: '错误获取引用',
			saveError: '服务器错误：您的更改尚未完全保存',
		},
	},
};
