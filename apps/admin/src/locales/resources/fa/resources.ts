/* eslint-disable sonarjs/no-duplicate-string */
import { ResourcesMessages } from 'src/locales';

export const resourceMessages: ResourcesMessages = {
	resources: {
		addresses: {
			fields: {
				building: 'ساختمان',
				city_id: 'شهر',
				country_id: 'کشور',
				street: 'خیابان',
			},
			name_one: 'نشانی',
			name_other: 'نشانی',
		},

		base_call_for_action: {
			fields: {
				notes: 'یادداشت',
				title: 'عنوان',
			},
			name_one: 'پاسخ برای عمل',
			name_other: 'پاسخ برای عمل',
		},
		base_complaints: {
			fields: {
				title: 'عنوان',
			},
			name_one: 'شکایت پایه',
			name_other: 'شکایت پایه',
		},
		base_proposals: {
			fields: {
				title: 'عنوان',
			},
			name_one: 'پیشنهاد پایه',
			name_other: 'پیشنهاد پایه',
		},
		base_requests: {
			fields: {
				status: 'وضعیت درخواست',
				title: 'عنوان',
			},
			name_one: 'درخواست پایه',
			name_other: 'درخواست پایه',
		},
		certifications: {
			fields: {
				credential_number: 'شماره اعتبار',
				credential_url: 'URL اعتبار سنجی',
				date_of_expiry: 'تاریخ انقضا',
				date_of_issue: 'تاریخ صدور',
				employee_id: 'حساب',
				issuing_organization: 'سازمان دهنده',
				level: 'مرحله',
				name: 'نام',
				specialization: 'تخصص',
			},
			name_one: 'صدور گواهینامه',
			name_other: 'صدور گواهینامه',
		},
		complaints: {
			fields: {
				description: 'شرح',
			},
			name_one: 'شکایت',
			name_other: 'شکایت',
		},
		contact_information: {
			fields: {},
			name_one: 'اطلاعات تماس',
			name_other: 'اطلاعات تماس',
		},
		contracts: {
			fields: {
				benefits: 'فواید',
				duties: 'وظایف',
				job_title_id: 'شناسه عنوان شغلی',
				probation_period: 'دوره آزمایشی',
				responsibilities: 'مسئولیت ها',
				salary: 'حقوق',
			},
			name_one: 'قرارداد',
			name_other: 'قرارداد',
		},
		deductions: {
			fields: {},
			name_one: 'کسر',
			name_other: 'کسر',
		},
		departments: {
			fields: {},
			name_one: 'بخش',
			name_other: 'بخش',
		},
		driver_licenses: {
			fields: {
				blood_type_id: 'گروه خونی',
				date_of_expiry: 'تاریخ انقضا',
				date_of_issue: 'تاریخ صدور',
				employee_id: 'حساب',
				license_number: 'شماره پروانه',
				type: 'نوع',
			},
			name_one: 'گواهینامه رانندگی',
			name_other: 'گواهینامه رانندگی',
		},
		emergency_contacts: {
			fields: {},
			name_one: 'تماس اضطراری',
			name_other: 'تماس اضطراری',
		},
		employees: {
			fields: {
				city_of_birth_id: 'شهر تولد',
				country_of_birth_id: 'کشور محل تولد',
				date_of_birth: 'تاریخ تولد',
				date_of_hiring: 'تاریخ استخدام',
				full_name: 'نام و نام خانوادگی',
				gender: 'جنس',
				image_id: 'تصویر نمایه',
				phone: 'شماره تلفن',
				preferences: 'ترجیح',
				sponsor_id: 'حامی',
				username: 'نام کاربری',
			},
			helperText: {
				username:
					'نام کاربری خود را در اینجا وارد کنید می توانید از آن برای ورود به سیستم استفاده کنید',
			},
			name_one: 'کارمند شرکت',
			name_other: 'کارمند شرکت',
		},
		entities: {
			fields: {
				activity: 'فعالیت',
				children: 'فرزندان',
				email: 'پست الکترونیک',
				entity_type_id: 'نوع موجودیت',
				logo_id: 'لوگو',
				name: 'نام',
				parent_id: 'والدین',
				phone: 'تلفن',
				tax_number: 'شماره مالیاتی',
				trading_number: 'شماره معاملات',
				type: 'نوع',
			},
			name_one: 'وجود، موجودیت',
			name_other: 'وجود، موجودیت',
		},
		entity_types: {
			fields: {
				description: 'شرح',
				level: 'مرحله',
				name: 'نام',
				slug: 'لگد زدن',
			},
			name_one: 'نوع موجودیت',
			name_other: 'نوع موجودیت',
		},
		identification_cards: {
			fields: {
				back_image_id: 'تصویر عقب',
				date_of_issue: 'تاریخ صدور',
				employee_id: 'حساب',
				front_image_id: 'تصویر جلو',
				id_number: 'شماره شناسایی',
				place_of_issue_id: 'جایگاه',
			},
			name_one: 'کارت شناسایی',
			name_other: 'کارت شناسایی',
		},
		images: {
			fields: {
				description: 'شرح',
				object_id: 'هدف - شی',
			},
			name_one: 'تصویر',
			name_other: 'تصویر',
		},
		insurance_reports: {
			fields: {},
			name_one: 'گزارش بیمه',
			name_other: 'گزارش بیمه',
		},
		job_titles: {
			fields: {
				name: 'نام',
			},
			name_one: 'عنوان شغلی',
			name_other: 'عنوان شغلی',
		},
		jsonschema_validators: {
			fields: {
				description: 'شرح',
				schema: 'طرح',
				schema_name: 'نام طرح',
			},
			name_one: 'اعتبار سنج',
			name_other: 'اعتبار سنج',
		},
		options: {
			fields: {
				name: 'نام',
				validator: 'اعتبار دهنده',
				value: 'ارزش',
			},
			name_one: 'گزینه',
			name_other: 'گزینه',
		},
		passports: {
			fields: {
				date_of_expiry: 'تاریخ انقضا',
				date_of_issue: 'تاریخ صدور',
				employee_id: 'حساب',
				place_of_issue_id: 'جایگاه',
			},
			name_one: 'گذرنامه',
			name_other: 'گذرنامه',
		},
		policies: {
			fields: {},
			name_one: 'خط مشی',
			name_other: 'خط مشی',
		},
		proposals: {
			fields: {
				description: 'شرح',
			},
			name_one: 'پیشنهاد',
			name_other: 'پیشنهاد',
		},
		relatives: {
			fields: {
				date_of_birth: 'تاریخ تولد',
				employee_id: 'حساب',
				name: 'نام',
			},
			name_one: 'نسبت فامیلی',
			name_other: 'نسبت فامیلی',
		},
		request_advances: {
			fields: {
				advance_type_id: 'انواع',
				amount: 'میزان',
				date_of_payment: 'تاریخ پرداخت',
				date_of_receipt: 'تاریخ دریافت',
				installments: 'قسط',
			},
			name_one: 'درخواست پیشرفت',
			name_other: 'درخواست پیشرفت',
		},
		request_allowances: {
			fields: {
				allowance_type_id: 'نوع کمک هزینه',
				suggested_amount: 'مقدار پیشنهادی',
			},
			name_one: 'کمک هزینه',
			name_other: 'کمک هزینه',
		},
		request_benefits: {
			fields: {},
			name_one: 'سود درخواست',
			name_other: 'سود درخواست',
		},
		request_bonuses: {
			fields: {
				bonus_type_id: 'نوع',
			},
			name_one: 'جایزه',
			name_other: 'جایزه',
		},
		request_commissions: {
			fields: {},
			name_one: 'کمیسیون',
			name_other: 'کمیسیون',
		},
		request_delegations: {
			fields: {
				from: 'از جانب',
				reason: 'دلایل',
				to: 'به',
			},
			name_one: 'نمایندگی',
			name_other: 'نمایندگی',
		},
		request_expenses: {
			fields: {},
			name_one: 'هزینه',
			name_other: 'هزینه',
		},
		request_external_delegations: {
			fields: {
				destination: 'مقصد',
				from: 'از جانب',
				reason: 'دلیل',
				to: 'به',
			},
			name_one: 'هیئت خارجی',
			name_other: 'هیئت خارجی',
		},
		request_installments: {
			fields: {},
			name_one: 'قسط',
			name_other: 'قسط',
		},

		request_internal_delegations: {
			fields: {
				entity_id: 'وجود، موجودیت',
				from: 'از جانب',
				reason: 'دلیل',
				to: 'به',
			},
			name_one: 'هیئت داخلی',
			name_other: 'هیئت داخلی',
		},
		request_payroll_deductions_cancels: {
			fields: {
				reason: 'دلیل',
			},
			name_one: 'لغو کسر حقوق و دستمزد',
			name_other: 'لغو کسر حقوق و دستمزد',
		},
		request_promotions: {
			fields: {
				new_job_title_id: 'عنوان شغلی جدید',
			},
			name_one: 'ترویج',
			name_other: 'ترویج',
		},
		request_punctuality_changes: {
			fields: {},
			name_one: 'تغییر دقیق',
			name_other: 'تغییر دقیق',
		},
		request_purchases: {
			fields: {
				amount: 'میزان',
				name: 'نام',
			},
			name_one: 'خرید',
			name_other: 'خرید',
		},
		request_resignations: {
			fields: {
				reason: 'دلیل',
			},
			name_one: 'استعفا',
			name_other: 'استعفا',
		},
		request_retirement_age_extensions: {
			fields: {
				survey_answer_id: 'پاسخ نظرسنجی',
			},
			name_one: 'پسوند سن بازنشستگی',
			name_other: 'پسوند سن بازنشستگی',
		},
		request_salary_raises: {
			fields: {
				amount: 'مقدار پیشنهادی',
				reasons: 'دلایل',
			},
			name_one: 'افزایش حقوق',
			name_other: 'افزایش حقوق',
		},
		request_settlements: {
			fields: {},
			name_one: 'توافق',
			name_other: 'توافق',
		},

		request_transfers: {
			fields: {},
			name_one: 'انتقال',
			name_other: 'انتقال',
		},
		request_vacations: {
			fields: {
				from: 'از جانب',
				to: 'به',
				vacation_type_id: 'نوع',
			},
			name_one: 'تعطیلات',
			name_other: 'تعطیلات',
		},
		request_work_hours_changes: {
			fields: {
				new_work_hours_id: 'ساعات کار جدید',
			},
			name_one: 'تغییر ساعت کار',
			name_other: 'تغییر ساعت کار',
		},
		requests: {
			fields: {
				description: 'شرح',
			},
			name_one: 'درخواست',
			name_other: 'درخواست',
		},
		res_cities: {
			fields: {
				city_ascii: 'نام شهر',
			},
			name_one: 'شهر',
			name_other: 'شهر',
		},
		res_countries: {
			fields: {
				currency_id: 'واحد پول',
				iso2: 'ISO2',
				iso3: 'ISO3',
				local_name: 'نام محلی',
				name: 'نام',
				nationality: 'ملیت',
			},
			name_one: 'کشور',
			name_other: 'کشور',
		},
		res_currencies: {
			fields: {
				active: 'فعال',
				currency_subunit_label: 'برچسب زیر واحد ارز',
				currency_unit_label: 'برچسب واحد ارز',
				decimal_places: 'مکان های دهدهی',
				full_name: 'نام و نام خانوادگی',
				name: 'نام',
				position: 'موقعیت',
				rounding: 'گرد',
				symbol: 'سمبل',
			},
			name_one: 'واحد پول',
			name_other: 'واحد پول',
		},
		residencies: {
			fields: {
				from: 'تاریخ شروع',
				to: 'تاریخ پایان',
			},
			name_one: 'اقامت',
			name_other: 'اقامت',
		},
		sponsors: {
			fields: {},
			name_one: 'اسپانسر',
			name_other: 'اسپانسر',
		},
		status_histories: {
			fields: {},
			name_one: 'تاریخچه وضعیت',
			name_other: 'تاریخچه وضعیت',
		},
		survey_answers: {
			fields: {
				answers: 'پاسخ',
				responder_id: 'پاسخ دهنده',
				status: 'وضعیت',
				survey_id: 'نظر سنجی',
			},
			name_one: 'پاسخ نظرسنجی',
			name_other: 'پاسخ نظرسنجی',
		},
		surveys: {
			fields: {
				name: 'نام',
				survey_schema: 'طرحواره بررسی',
			},
			name_one: 'نظر سنجی',
			name_other: 'نظر سنجی',
		},
		template: {
			fields: {},
			name_one: 'قالب',
			name_other: 'قالب',
		},
		vacations: {
			fields: {},
			name_one: 'تعطیلات',
			name_other: 'تعطیلات',
		},
		visas: {
			fields: {
				visa_type_id: 'انواع ویزا',
			},
			name_one: 'ویزا',
			name_other: 'ویزا',
		},
		work_hours: {
			fields: {},
			name_one: 'ساعت کار',
			name_other: 'ساعت کار',
		},
		work_locations: {
			fields: {},
			name_one: 'محل کار',
			name_other: 'محل کار',
		},
	},
};
