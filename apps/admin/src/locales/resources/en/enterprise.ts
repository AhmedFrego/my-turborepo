import { EnterpriseMessages } from 'src/locales';

export const enterpriseMessages: EnterpriseMessages = {
	'ra-form-layout': {
		action: {
			bulk_update: 'Update selected {{resource}}',
			next: 'Next',
			previous: 'Previous',
		},
		autosave: {
			error: 'Server error, changes are not saved: {{error}}',
			last_saved_at: 'All changes saved',
			saving: 'Saving...',
		},
		filters: {
			apply_filters: 'Apply',
			filters_button_label: 'Filters',
			operator: 'Operator',
			operators: {
				boolean: 'Is true',
				eq: 'Equals',
				eq_any: 'Equals any',
				gt: 'Greater than',
				inc: 'Includes',
				inc_any: 'Includes any',
				lt: 'Less than',
				neq: 'Not equals',
				neq_any: 'Not equals any',
				ninc_any: 'Includes none',
				q: 'Contains',
			},
			remove_all_filters: 'Remove all filters',
			source: 'Source',
			value: 'Value',
		},
		input_selector_form: {
			select_inputs: 'Select fields',
			select_values: 'Select values',
		},
	},
	'ra-rbac': {
		message: {
			unauthorized: 'You are not allowed to access this page',
		},
		page: {
			unauthorized: 'Unauthorized',
		},
	},
	'ra-relationships': {
		duallistinput: {
			availableItems: 'Available items',
			select: 'Select',
			selectedItems: 'Selected items',
			unselect: 'Unselect',
		},
		referenceManyInput: {
			fetchError: 'Error fetching references',
			saveError: 'Server error: your changes were not completely saved',
		},
	},
	'ra-search': {
		recent: 'Recent',
		result_one: '1 result',
		result_other: '{{count}} results',
	},
};
