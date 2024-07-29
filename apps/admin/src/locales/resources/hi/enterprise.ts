import { EnterpriseMessages } from 'src/locales';

export const enterpriseMessages: EnterpriseMessages = {
	'ra-form-layout': {
		action: {
			bulk_update: 'चयनित {{resource}} अपडेट करें',
			next: 'अगला',
			previous: 'पहले का',
		},
		autosave: {
			error: 'सर्वर त्रुटि, परिवर्तन सहेजे नहीं जाते हैं: {{error}}',
			last_saved_at: 'सभी बदलाव बच गए',
			saving: 'बचत ...',
		},
		filters: {
			apply_filters: 'आवेदन करना',
			filters_button_label: 'फिल्टर',
			operator: 'ऑपरेटर',
			operators: {
				boolean: 'क्या सच है',
				eq: 'बराबर',
				eq_any: 'किसी भी के बराबर है',
				gt: 'से अधिक',
				inc: 'शामिल',
				inc_any: 'कोई भी शामिल है',
				lt: 'से कम',
				neq: 'समान नहीं',
				neq_any: 'कोई भी बराबर नहीं है',
				ninc_any: 'कोई भी शामिल नहीं है',
				q: 'रोकना',
			},
			remove_all_filters: 'सभी फिल्टर निकालें',
			source: 'स्रोत',
			value: 'कीमत',
		},
		input_selector_form: {
			select_inputs: 'फ़ील्ड का चयन करें',
			select_values: 'मानों का चयन करें',
		},
	},
	'ra-relationships': {
		duallistinput: {
			availableItems: 'उपलब्ध आइटम',
			select: 'चुनना',
			selectedItems: 'चयनित उत्पाद',
			unselect: 'सभी का चयन रद्द',
		},
		referenceManyInput: {
			fetchError: 'संदर्भ लाने में त्रुटि',
			saveError: 'सर्वर त्रुटि: आपके परिवर्तन पूरी तरह से सहेजे नहीं गए थे',
		},
	},
};
