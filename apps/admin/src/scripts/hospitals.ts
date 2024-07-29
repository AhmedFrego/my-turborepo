import { kebabCase } from 'change-case';
import { parse } from 'csv-parse';
import { writeFile } from 'fs-extra';
import uniqBy from 'lodash/uniqBy';
import * as fs from 'node:fs';
import path from 'node:path';

const cities = () => {
	// eslint-disable-next-line unicorn/prefer-module
	const hospitals = path.resolve(__dirname, 'hospitals.csv');

	const hospitalsHeaders = [
		'BP CODE',
		'NTW #',
		'PROVIDER NAME',
		'REGION',
		'CITY',
		'DISTRICT',
		'TYPE',
		'NTW 1',
		'NTW 2',
		'NTW 3',
		'NTW 4',
		'NTW 5',
		'NTW 6',
		'NTW 7',
		'NTW 8',
		'NTW 9',
		'NTW 10',
		'TEL',
		'FAX',
		'المدنة',
		'المنطقة',
		'اسم مقدم الخدمة',
	];

	const worldcitiesContent = fs.readFileSync(hospitals, {
		encoding: 'utf8',
	});

	parse(
		worldcitiesContent,
		{
			columns: hospitalsHeaders,
			delimiter: ',',
		},
		(
			error,
			csv: {
				'BP CODE': string;
				CITY: string;
				DISTRICT: string;
				FAX: string;
				'NTW #': string;
				'NTW 1': string;
				'NTW 2': string;
				'NTW 3': string;
				'NTW 4': string;
				'NTW 5': string;
				'NTW 6': string;
				'NTW 7': string;
				'NTW 8': string;
				'NTW 9': string;
				'NTW 10': string;
				'PROVIDER NAME': string;
				REGION: string;
				TEL: string;
				TYPE: string;
				'اسم مقدم الخدمة': string;
				المدنة: string;
				المنطقة: string;
			}[],
		) => {
			if (error) {
				console.error(error);
			}

			const [, ...rest] = csv;

			writeFile(
				'scripts/survey.json',
				`{
					"locale": "ar",
					"title": {
						"default": "Insurance Class",
						"ar": "فئة التأمين"
					},
					"description": {
						"default": "To view details related to insurance services",
						"ar": "للاطلاع على التفاصيل المتعلقة بخدمات التأمين"
					},
					"pages": [
						{
							"name": "home_page",
							"elements": [
								{
									"type": "html",
									"name": "welcome_page",
									"html": {
										"default": "<h1> This survey helps you determine the appropriate insurance category for you and the hospitals available to you in your city </h1>",
										"ar": "<h1>هذا الاستطلاع يساعدك في تحديد فئة التأمين المناسبة  لك والمستشفيات المتاحة لك في مدينتك  </h1>"
									}
								}
							],
							"title": {
								"default": "Welcome {username}",
								"ar": "أهلًا وسهلًا {username}"
							},
							"description": {
								"default": "Welcome",
								"ar": "مرحبا"
							}
						},
						{
							"name": "select_hospitals",
							"elements": [
								{
									"type": "paneldynamic",
									"name": "hospital_selection_panel",
									"title": {
										"default": "Choose hospitals and medical centers",
										"ar": "اختر المستشفيات والمراكز الطبية"
									},
									"templateElements": [
										{
											"type": "dropdown",
											"name": "region_selection",
											"title": {
												"default": "Select the region you belong to",
												"ar": "حدد المنطقة التي تنتمي إليها"
											},
											"choices": [${uniqBy(rest, 'المنطقة')
												.map(item => {
													const { REGION, المنطقة } = item;

													return JSON.stringify({
														text: { ar: المنطقة, default: REGION },
														value: kebabCase(REGION),
													});
												})
												.join('')}]
										},
										{
											"type": "dropdown",
											"name": "cities_selection",
											"visibleIf": "{panel.region_selection} notempty",
											"title": {
												"default": "Select your city",
												"ar": "اختر مدينتك"
											},
											"choices": [${uniqBy(rest, 'المدنة')
												.map(item => {
													const { CITY, REGION, المدنة } = item;

													return JSON.stringify({
														text: { ar: المدنة, default: CITY },
														value: kebabCase(CITY),
														visibleIf: `{panel.region_selection} = ${kebabCase(
															REGION,
														)}`,
													});
												})
												.join('')}]
										},
										{
											"type": "tagbox",
											"name": "hospital_selection",
											"visibleIf": "{panel.cities_selection} notempty",
											"title": {
												"default": "Identify the hospitals and centers you frequent",
												"ar": "تحديد المستشفيات والمراكز التي تتردد عليها"
											},
											"choices":[${rest
												.map(item => {
													const {
														CITY,
														'PROVIDER NAME': englishName,
														'اسم مقدم الخدمة': arabicName,
													} = item;

													return JSON.stringify({
														text: { ar: arabicName, default: englishName },
														value: kebabCase(englishName),
														visibleIf: `{panel.cities_selection} = ${kebabCase(
															CITY,
														)}`,
													});
												})
												.join('')}]
										}
									],
									"panelCount": 1,
									"panelAddText": {
										"default": "Add another hospital",
										"ar": "إضافة مستشفى آخر"
									}
								}
							],
							"title": {
								"default": "Select hospitals and centers",
								"ar": "حدد المستشفيات والمراكز"
							}
						}
					]
				}`,
				{
					flag: 'w',
				},
			).catch(console.log);
		},
	);
};

cities();
