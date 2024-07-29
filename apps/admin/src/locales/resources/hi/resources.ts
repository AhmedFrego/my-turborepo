/* eslint-disable sonarjs/no-duplicate-string */
import { ResourcesMessages } from 'src/locales';

export const resourceMessages: ResourcesMessages = {
	resources: {
		addresses: {
			fields: {
				building: 'इमारत',
				city_id: 'शहर',
				country_id: 'देश',
				street: 'गली',
			},
			name_one: 'पता',
			name_other: 'पता',
		},
		advances: {
			fields: {
				advance_request_id: 'अग्रिम अनुरोध आईडी',
				advance_type_id: 'अग्रिम प्रकार की आईडी',
				amount: 'मात्रा',
				date_of_payment: 'भुगतान की तिथि',
				date_of_receipt: 'प्राप्ति की तिथि',
				employee_id: 'कर्मचारी आयडी',
				installments: 'किश्तों',
			},
			name_one: 'अग्रिम',
			name_other: 'अग्रिम',
		},
		allowances: {
			fields: {
				allowance_type_id: 'भत्ता प्रकार',
				employee_id: 'कर्मचारी आयडी',
				notes: 'टिप्पणियाँ',
				request_allowances_id: 'भत्ते का अनुरोध करें',
				suggested_amount: 'सुझाई गई राशि',
			},
			name_one: 'भत्ता',
			name_other: 'भत्ता',
		},
		base_call_for_action: {
			fields: {
				notes: 'टिप्पणियाँ',
				title: 'शीर्षक',
			},
			name_one: 'कार्रवाई के लिए पुकार',
			name_other: 'कार्रवाई के लिए पुकार',
		},
		base_complaints: {
			fields: {
				title: 'शीर्षक',
			},
			name_one: 'आधार शिकायत',
			name_other: 'आधार शिकायत',
		},
		base_proposals: {
			fields: {
				title: 'शीर्षक',
			},
			name_one: 'आधार प्रस्ताव',
			name_other: 'आधार प्रस्ताव',
		},
		base_requests: {
			fields: {
				status: 'अनुरोध की स्थिति',
				title: 'शीर्षक',
			},
			name_one: 'आधार अनुरोध',
			name_other: 'आधार अनुरोध',
		},
		bonuses: {
			fields: {
				amount: 'मात्रा',
				bonus_request_id: 'बोनस अनुरोध आईडी',
				bonus_type_id: 'बोनस टाइप आईडी',
				employee_id: 'कर्मचारी आयडी',
				note: 'टिप्पणी',
				reason: 'कारण',
			},
			name_one: 'बोनस',
			name_other: 'बोनस',
		},
		certifications: {
			fields: {
				credential_number: 'साख संख्या',
				credential_url: 'साख',
				date_of_expiry: 'समाप्ति तिथि',
				date_of_issue: 'जारी करने की तिथि',
				employee_id: 'खाता',
				issuing_organization: 'प्रमाणपत्र जारीकर्ता संगठन',
				level: 'स्तर',
				name: 'नाम',
				specialization: 'विशेषज्ञता',
			},
			name_one: 'प्रमाणीकरण',
			name_other: 'प्रमाणीकरण',
		},
		complaints: {
			fields: {
				description: 'विवरण',
			},
			name_one: 'शिकायत',
			name_other: 'शिकायत',
		},
		contact_information: {
			fields: {},
			name_one: 'संपर्क जानकारी',
			name_other: 'संपर्क जानकारी',
		},
		contracts: {
			fields: {
				benefits: 'फ़ायदे',
				duties: 'कर्तव्य',
				job_title_id: 'नौकरी का शीर्षक आईडी',
				probation_period: 'परिवीक्षा अवधि',
				responsibilities: 'जिम्मेदारियों',
				salary: 'वेतन',
			},
			name_one: 'अनुबंध',
			name_other: 'अनुबंध',
		},
		deductions: {
			fields: {},
			name_one: 'कटौती',
			name_other: 'कटौती',
		},
		departments: {
			fields: {},
			name_one: 'विभाग',
			name_other: 'विभाग',
		},
		driver_licenses: {
			fields: {
				blood_type_id: 'रक्त प्रकार',
				date_of_expiry: 'समाप्ति तिथि',
				date_of_issue: 'जारी करने की तिथि',
				employee_id: 'खाता',
				license_number: 'लाइसेंस संख्या',
				type: 'प्रकार',
			},
			name_one: 'चालक लाइसेंस',
			name_other: 'चालक लाइसेंस',
		},
		emergency_contacts: {
			fields: {},
			name_one: 'आपातकालीन संपर्क',
			name_other: 'आपातकालीन संपर्क',
		},
		employees: {
			fields: {
				city_of_birth_id: 'जन्म का शहर',
				country_of_birth_id: 'जन्म का देश',
				date_of_birth: 'जन्म तिथि',
				date_of_hiring: 'नियुक्ति की तिथि',
				full_name: 'पूरा नाम',
				gender: 'लिंग',
				image_id: 'प्रोफ़ाइल छवि',
				phone: 'फ़ोन नंबर',
				preferences: 'वरीयता',
				sponsor_id: 'प्रायोजक',
				username: 'उपयोगकर्ता नाम',
			},
			helperText: {
				username:
					'अपना उपयोगकर्ता नाम दर्ज करें यहां आप इसे लॉगिन करने के लिए उपयोग कर सकते हैं',
			},
			name_one: 'कंपनी के कर्मचारी',
			name_other: 'कंपनी के कर्मचारी',
		},
		entities: {
			fields: {
				activity: 'गतिविधि',
				children: 'बच्चे',
				email: 'ईमेल',
				entity_type_id: 'इकाई प्रकार',
				logo_id: 'प्रतीक चिन्ह',
				name: 'नाम',
				parent_id: 'माता-पिता',
				phone: 'फ़ोन',
				tax_number: 'कर नंबर',
				trading_number: 'व्यापार संख्या',
				type: 'प्रकार',
			},
			name_one: 'इकाई',
			name_other: 'इकाई',
		},
		entity_types: {
			fields: {
				description: 'विवरण',
				level: 'स्तर',
				name: 'नाम',
				slug: 'काउंटर',
			},
			name_one: 'इकाई प्रकार',
			name_other: 'इकाई प्रकार',
		},
		expenses: {
			fields: {
				amount: 'मात्रा',
				expense_type_id: 'व्यय प्रकार की आईडी',
				request_expense_id: 'अनुरोध व्यय आईडी',
				title: 'शीर्षक',
			},
			name_one: 'खर्च',
			name_other: 'खर्च',
		},
		identification_cards: {
			fields: {
				back_image_id: 'पीछे की छवि',
				date_of_issue: 'जारी करने की तिथि',
				employee_id: 'खाता',
				front_image_id: 'सामने की छवि',
				id_number: 'आईडी नंबर',
				place_of_issue_id: 'मुद्दे की जगह',
			},
			name_one: 'पहचान कार्ड',
			name_other: 'पहचान कार्ड',
		},
		images: {
			fields: {
				description: 'विवरण',
				object_id: 'वस्तु',
			},
			name_one: 'छवि',
			name_other: 'छवि',
		},
		insurance_reports: {
			fields: {},
			name_one: 'बीमा रिपोर्ट',
			name_other: 'बीमा रिपोर्ट',
		},
		job_titles: {
			fields: {
				name: 'नाम',
			},
			name_one: 'नौकरी का नाम',
			name_other: 'नौकरी का नाम',
		},
		jsonschema_validators: {
			fields: {
				description: 'विवरण',
				schema: 'योजना',
				schema_name: 'स्कीमा नाम',
			},
			name_one: 'सत्यापनकर्ता',
			name_other: 'सत्यापनकर्ता',
		},
		options: {
			fields: {
				name: 'नाम',
				validator: 'सत्यापनकर्ता',
				value: 'कीमत',
			},
			name_one: 'विकल्प',
			name_other: 'विकल्प',
		},
		passports: {
			fields: {
				date_of_expiry: 'समाप्ति तिथि',
				date_of_issue: 'जारी करने की तिथि',
				employee_id: 'खाता',
				place_of_issue_id: 'मुद्दे की जगह',
			},
			name_one: 'पासपोर्ट',
			name_other: 'पासपोर्ट',
		},
		policies: {
			fields: {},
			name_one: 'नीति',
			name_other: 'नीति',
		},
		proposals: {
			fields: {
				description: 'विवरण',
			},
			name_one: 'प्रस्ताव',
			name_other: 'प्रस्ताव',
		},
		relatives: {
			fields: {
				date_of_birth: 'जन्म तिथि',
				employee_id: 'खाता',
				name: 'नाम',
			},
			name_one: 'रिश्तेदार',
			name_other: 'रिश्तेदार',
		},
		request_advances: {
			fields: {
				advance_type_id: 'प्रकार',
				amount: 'मात्रा',
				date_of_payment: 'भुगतान तिथि',
				date_of_receipt: 'प्राप्त तारीख',
				installments: 'किश्तों',
			},
			name_one: 'प्रगति का अनुरोध करें',
			name_other: 'प्रगति का अनुरोध करें',
		},
		request_allowances: {
			fields: {
				allowance_type_id: 'भत्ता प्रकार',
				suggested_amount: 'सुझाई गई राशि',
			},
			name_one: 'अनुरोध भत्ता',
			name_other: 'अनुरोध भत्ता',
		},
		request_benefits: {
			fields: {},
			name_one: 'अनुरोध लाभ',
			name_other: 'अनुरोध लाभ',
		},
		request_bonuses: {
			fields: {
				bonus_type_id: 'प्रकार',
			},
			name_one: 'बक्शीश',
			name_other: 'बक्शीश',
		},
		request_commissions: {
			fields: {},
			name_one: 'आयोग',
			name_other: 'आयोग',
		},
		request_delegations: {
			fields: {
				from: 'से',
				reason: 'कारण',
				to: 'को',
			},
			name_one: 'प्रतिनिधि मंडल',
			name_other: 'प्रतिनिधि मंडल',
		},
		request_expenses: {
			fields: {},
			name_one: 'व्यय',
			name_other: 'व्यय',
		},
		request_external_delegations: {
			fields: {
				destination: 'गंतव्य',
				from: 'से',
				reason: 'कारण',
				to: 'को',
			},
			name_one: 'बाह्य प्रतिनिधिमंडल',
			name_other: 'बाह्य प्रतिनिधिमंडल',
		},
		request_installments: {
			fields: {},
			name_one: 'किश्त',
			name_other: 'किश्त',
		},
		request_internal_delegations: {
			fields: {
				entity_id: 'इकाई',
				from: 'से',
				reason: 'कारण',
				to: 'को',
			},
			name_one: 'आंतरिक प्रतिनिधिमंडल',
			name_other: 'आंतरिक प्रतिनिधिमंडल',
		},
		request_payroll_deductions_cancels: {
			fields: {
				reason: 'कारण',
			},
			name_one: 'पेरोल कटौती रद्दीकरण',
			name_other: 'पेरोल कटौती रद्दीकरण',
		},
		request_promotions: {
			fields: {
				new_job_title_id: 'नई नौकरी का शीर्षक',
			},
			name_one: 'पदोन्नति',
			name_other: 'पदोन्नति',
		},
		request_punctuality_changes: {
			fields: {},
			name_one: 'समय -समय पर परिवर्तन',
			name_other: 'समय -समय पर परिवर्तन',
		},
		request_purchases: {
			fields: {
				amount: 'मात्रा',
				name: 'नाम',
			},
			name_one: 'खरीदना',
			name_other: 'खरीदना',
		},
		request_resignations: {
			fields: {
				reason: 'कारण',
			},
			name_one: 'इस्तीफा',
			name_other: 'इस्तीफा',
		},
		request_retirement_age_extensions: {
			fields: {
				survey_answer_id: 'सर्वेक्षण उत्तर',
			},
			name_one: 'सेवानिवृत्ति आयु विस्तार',
			name_other: 'सेवानिवृत्ति आयु विस्तार',
		},
		request_salary_raises: {
			fields: {
				amount: 'सुझाई गई राशि',
				reasons: 'कारण',
			},
			name_one: 'वेतन वृद्धि',
			name_other: 'वेतन वृद्धि',
		},
		request_settlements: {
			fields: {},
			name_one: 'समझौता',
			name_other: 'समझौता',
		},

		request_transfers: {
			fields: {},
			name_one: 'स्थानांतरण',
			name_other: 'स्थानांतरण',
		},
		request_vacations: {
			fields: {
				from: 'से',
				to: 'को',
				vacation_type_id: 'प्रकार',
			},
			name_one: 'छुट्टी',
			name_other: 'छुट्टी',
		},
		request_work_hours_changes: {
			fields: {
				new_work_hours_id: 'नए काम के घंटे',
			},
			name_one: 'काम का समय परिवर्तन',
			name_other: 'काम का समय परिवर्तन',
		},
		requests: {
			fields: {
				description: 'विवरण',
			},
			name_one: 'अनुरोध',
			name_other: 'अनुरोध',
		},
		res_cities: {
			fields: {
				city_ascii: 'शहर का नाम',
			},
			name_one: 'शहर',
			name_other: 'शहर',
		},
		res_countries: {
			fields: {
				currency_id: 'मुद्रा',
				iso2: 'iso2',
				iso3: 'iso3',
				local_name: 'स्थानीय नाम',
				name: 'नाम',
				nationality: 'राष्ट्रीयता',
			},
			name_one: 'देश',
			name_other: 'देश',
		},
		res_currencies: {
			fields: {
				active: 'सक्रिय',
				currency_subunit_label: 'मुद्रा सबयूनिट लेबल',
				currency_unit_label: 'मुद्रा एकक लेबल',
				decimal_places: 'दशमलव स्थानों',
				full_name: 'पूरा नाम',
				name: 'नाम',
				position: 'पद',
				rounding: 'गोलाई',
				symbol: 'प्रतीक',
			},
			name_one: 'मुद्रा',
			name_other: 'मुद्रा',
		},
		residencies: {
			fields: {
				from: 'आरंभ करने की तिथि',
				to: 'अंतिम तिथि',
			},
			name_one: 'निवास',
			name_other: 'निवास',
		},
		sponsors: {
			fields: {},
			name_one: 'प्रायोजक',
			name_other: 'प्रायोजक',
		},
		status_histories: {
			fields: {},
			name_one: 'स्थिति इतिहास',
			name_other: 'स्थिति इतिहास',
		},
		survey_answers: {
			fields: {
				answers: 'उत्तर',
				responder_id: 'प्रत्युत्तर',
				status: 'स्थिति',
				survey_id: 'सर्वे',
			},
			name_one: 'सर्वेक्षण उत्तर',
			name_other: 'सर्वेक्षण उत्तर',
		},
		surveys: {
			fields: {
				name: 'नाम',
				survey_schema: 'सर्वेक्षण स्कीमा',
			},
			name_one: 'सर्वे',
			name_other: 'सर्वे',
		},
		template: {
			fields: {},
			name_one: 'खाका',
			name_other: 'खाका',
		},
		types: {
			fields: {
				name: 'प्रकार',
			},
			name_one: 'प्रकार',
			name_other: 'प्रकार',
		},
		vacations: {
			fields: {},
			name_one: 'छुट्टी',
			name_other: 'छुट्टी',
		},
		visas: {
			fields: {
				visa_type_id: 'वीजा प्रकार',
			},
			name_one: 'वीज़ा',
			name_other: 'वीज़ा',
		},
		work_hours: {
			fields: {},
			name_one: 'काम का समय',
			name_other: 'काम का समय',
		},
		work_locations: {
			fields: {},
			name_one: 'कार्य स्थल',
			name_other: 'कार्य स्थल',
		},
	},
};
