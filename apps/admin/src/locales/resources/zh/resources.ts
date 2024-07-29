import { ResourcesMessages } from 'src/locales';

export const resourceMessages: ResourcesMessages = {
	resources: {
		addresses: {
			fields: {
				building: '建筑',
				city_id: '城市',
				country_id: '国家',
				street: '街道',
			},
			name_one: '地址',
			name_other: '地址',
		},
		base_call_for_action: {
			fields: {
				notes: '笔记',
				title: '标题',
			},
			name_one: '呼吁采取行动',
			name_other: '呼吁采取行动',
		},
		base_complaints: {
			fields: {
				title: '标题',
			},
			name_one: '基本投诉',
			name_other: '基本投诉',
		},
		base_proposals: {
			fields: {
				title: '标题',
			},
			name_one: '基本建议',
			name_other: '基本建议',
		},
		base_requests: {
			fields: {
				status: '请求状态',
				title: '标题',
			},
			name_one: '基本请求',
			name_other: '基本请求',
		},
		certifications: {
			fields: {
				credential_number: '凭据编号',
				credential_url: '凭证URL',
				date_of_expiry: '到期日期',
				date_of_issue: '签发日期',
				employee_id: '帐户',
				issuing_organization: '颁发机构',
				level: '等级',
				name: '姓名',
				specialization: '专业化',
			},
			name_one: '认证',
			name_other: '认证',
		},
		complaints: {
			fields: {
				description: '描述',
			},
			name_one: '抱怨',
			name_other: '抱怨',
		},
		contact_information: {
			fields: {},
			name_one: '联系信息',
			name_other: '联系信息',
		},
		contracts: {
			fields: {
				benefits: '好处',
				duties: '职责',
				job_title_id: '职位ID',
				probation_period: '试用期',
				responsibilities: '职责',
				salary: '薪水',
			},
			name_one: '合同',
			name_other: '合同',
		},
		deductions: {
			fields: {},
			name_one: '扣除',
			name_other: '扣除',
		},
		departments: {
			fields: {},
			name_one: '部门',
			name_other: '部门',
		},
		driver_licenses: {
			fields: {
				blood_type_id: '血型',
				date_of_expiry: '到期日期',
				date_of_issue: '签发日期',
				employee_id: '帐户',
				license_number: '许可证号',
				type: '类型',
			},
			name_one: '驾驶执照',
			name_other: '驾驶执照',
		},
		emergency_contacts: {
			fields: {},
			name_one: '紧急联系人',
			name_other: '紧急联系人',
		},
		employees: {
			fields: {
				city_of_birth_id: '出生城市',
				country_of_birth_id: '出生国',
				date_of_birth: '出生日期',
				date_of_hiring: '聘用日期',
				full_name: '全名',
				gender: '性别',
				image_id: '个人资料图像',
				phone: '电话号码',
				preferences: '偏爱',
				sponsor_id: '赞助',
				username: '用户名',
			},
			helperText: {
				username: '在这里输入您的用户名，您可以使用它来登录',
			},
			name_one: '公司员工',
			name_other: '公司员工',
		},
		entities: {
			fields: {
				activity: '活动',
				children: '孩子们',
				email: '电子邮件',
				entity_type_id: '实体类型',
				logo_id: '标识',
				name: '姓名',
				parent_id: '父母',
				phone: '电话',
				tax_number: '税号',
				trading_number: '交易号码',
				type: '类型',
			},
			name_one: '实体',
			name_other: '实体',
		},
		entity_types: {
			fields: {
				description: '描述',
				level: '等级',
				name: '姓名',
				slug: 'sl',
			},
			name_one: '实体类型',
			name_other: '实体类型',
		},
		identification_cards: {
			fields: {
				back_image_id: '返回图像',
				date_of_issue: '签发日期',
				employee_id: '帐户',
				front_image_id: '前图',
				id_number: '身份证号',
				place_of_issue_id: '签发地点',
			},
			name_one: '身份证',
			name_other: '身份证',
		},
		images: {
			fields: {
				description: '描述',
				object_id: '目的',
			},
			name_one: '图像',
			name_other: '图像',
		},
		insurance_reports: {
			fields: {},
			name_one: '保险报告',
			name_other: '保险报告',
		},
		job_titles: {
			fields: {
				name: '姓名',
			},
			name_one: '职称',
			name_other: '职称',
		},
		jsonschema_validators: {
			fields: {
				description: '描述',
				schema: '模式',
				schema_name: '模式名称',
			},
			name_one: '验证器',
			name_other: '验证器',
		},
		options: {
			fields: {
				name: '姓名',
				validator: '验证器',
				value: '价值',
			},
			name_one: '选项',
			name_other: '选项',
		},
		passports: {
			fields: {
				date_of_expiry: '到期日期',
				date_of_issue: '签发日期',
				employee_id: '帐户',
				place_of_issue_id: '签发地点',
			},
			name_one: '护照',
			name_other: '护照',
		},
		policies: {
			fields: {},
			name_one: '政策',
			name_other: '政策',
		},
		proposals: {
			fields: {
				description: '描述',
			},
			name_one: '提议',
			name_other: '提议',
		},
		relatives: {
			fields: {
				date_of_birth: '出生日期',
				employee_id: '帐户',
				name: '姓名',
			},
			name_one: '相对的',
			name_other: '相对的',
		},
		request_advances: {
			fields: {
				advance_type_id: '类型',
				amount: '数量',
				date_of_payment: '付款日期',
				date_of_receipt: '收到的日期',
				installments: '分期付款',
			},
			name_one: '请求预付款',
			name_other: '请求预付款',
		},
		request_allowances: {
			fields: {
				allowance_type_id: '津贴类型',
				suggested_amount: '建议的金额',
			},
			name_one: '请求津贴',
			name_other: '请求津贴',
		},
		request_benefits: {
			fields: {},
			name_one: '请求利益',
			name_other: '请求利益',
		},
		request_bonuses: {
			fields: {
				bonus_type_id: '类型',
			},
			name_one: '奖金',
			name_other: '奖金',
		},
		request_commissions: {
			fields: {},
			name_one: '委员会',
			name_other: '委员会',
		},
		request_delegations: {
			fields: {
				from: '从',
				reason: '原因',
				to: '到',
			},
			name_one: '代表团',
			name_other: '代表团',
		},
		request_expenses: {
			fields: {},
			name_one: '费用',
			name_other: '费用',
		},
		request_external_delegations: {
			fields: {
				destination: '目的地',
				from: '从',
				reason: '原因',
				to: '到',
			},
			name_one: '外部委托',
			name_other: '外部委托',
		},
		request_installments: {
			fields: {},
			name_one: '分期付款',
			name_other: '分期付款',
		},
		request_internal_delegations: {
			fields: {
				entity_id: '实体',
				from: '从',
				reason: '原因',
				to: '到',
			},
			name_one: '内部代表团',
			name_other: '内部代表团',
		},
		request_payroll_deductions_cancels: {
			fields: {
				reason: '原因',
			},
			name_one: '工资扣除取消',
			name_other: '工资扣除取消',
		},
		request_promotions: {
			fields: {
				new_job_title_id: '新职位',
			},
			name_one: '晋升',
			name_other: '晋升',
		},
		request_punctuality_changes: {
			fields: {},
			name_one: '守时性变化',
			name_other: '守时性变化',
		},
		request_purchases: {
			fields: {
				amount: '数量',
				name: '姓名',
			},
			name_one: '购买',
			name_other: '购买',
		},
		request_resignations: {
			fields: {
				reason: '原因',
			},
			name_one: '辞职',
			name_other: '辞职',
		},
		request_retirement_age_extensions: {
			fields: {
				survey_answer_id: '调查答案',
			},
			name_one: '退休年龄扩展',
			name_other: '退休年龄扩展',
		},
		request_salary_raises: {
			fields: {
				amount: '建议的金额',
				reasons: '原因',
			},
			name_one: '加薪',
			name_other: '加薪',
		},
		request_settlements: {
			fields: {},
			name_one: '沉降',
			name_other: '沉降',
		},

		request_transfers: {
			fields: {},
			name_one: '转移',
			name_other: '转移',
		},
		request_vacations: {
			fields: {
				from: '从',
				to: '到',
				vacation_type_id: '类型',
			},
			name_one: '假期',
			name_other: '假期',
		},
		request_work_hours_changes: {
			fields: {
				new_work_hours_id: '新工作时间',
			},
			name_one: '工作时间更改',
			name_other: '工作时间更改',
		},
		requests: {
			fields: {
				description: '描述',
			},
			name_one: '要求',
			name_other: '要求',
		},
		res_cities: {
			fields: {
				city_ascii: '城市名',
			},
			name_one: '城市',
			name_other: '城市',
		},
		res_countries: {
			fields: {
				currency_id: '货币',
				iso2: 'ISO2',
				iso3: 'ISO3',
				local_name: '本地名称',
				name: '姓名',
				nationality: '国籍',
			},
			name_one: '国家',
			name_other: '国家',
		},
		res_currencies: {
			fields: {
				active: '积极的',
				currency_subunit_label: '货币亚基标签',
				currency_unit_label: '货币单位标签',
				decimal_places: '十进制位置',
				full_name: '全名',
				name: '姓名',
				position: '位置',
				rounding: '四舍五入',
				symbol: '象征',
			},
			name_one: '货币',
			name_other: '货币',
		},
		residencies: {
			fields: {
				from: '开始日期',
				to: '结束日期',
			},
			name_one: '居住',
			name_other: '居住',
		},
		sponsors: {
			fields: {},
			name_one: '赞助',
			name_other: '赞助',
		},
		status_histories: {
			fields: {},
			name_one: '状态历史',
			name_other: '状态历史',
		},
		survey_answers: {
			fields: {
				answers: '回答',
				responder_id: '响应者',
				status: '地位',
				survey_id: '民意调查',
			},
			name_one: '调查答案',
			name_other: '调查答案',
		},
		surveys: {
			fields: {
				name: '姓名',
				survey_schema: '调查模式',
			},
			name_one: '民意调查',
			name_other: '民意调查',
		},
		template: {
			fields: {},
			name_one: '模板',
			name_other: '模板',
		},
		vacations: {
			fields: {},
			name_one: '假期',
			name_other: '假期',
		},
		visas: {
			fields: {
				visa_type_id: '签证类型',
			},
			name_one: '签证',
			name_other: '签证',
		},
		work_hours: {
			fields: {},
			name_one: '工作时间',
			name_other: '工作时间',
		},
		work_locations: {
			fields: {},
			name_one: '工作地点',
			name_other: '工作地点',
		},
	},
};
