import { faker } from '@faker-js/faker';
import * as DateFns from 'date-fns';

import { client } from './client';
import { Tables, TablesInsert } from './supabase';
import { jobTitlesSeed, typesSeed } from './types';

export const { addDays, addYears, differenceInYears, subDays, subYears } =
	DateFns;

export enum Genders {
	female = 'female',
	male = 'male',
}

export enum Categories {
	Activity = 'activity',
	Advances = 'advances',
	Allowances = 'allowances',
	BloodTypes = 'blood_types',
	Bonuses = 'bonuses',
	Commissions = 'commissions',
	Contracts = 'contracts',
	Deductions = 'deductions',
	EmergencyRelationships = 'emergency_relationships',
	Entities = 'entities',
	Expenses = 'expenses',
	FinancialComplaints = 'financial_complaints',
	Installments = 'installments',
	PayrollDeductions = 'payroll_deductions',
	Permissions = 'permissions',
	Punctuates = 'punctuates',
	Relations = 'relations',
	Settlements = 'settlements',
	TrainingTypes = 'training_types',
	Vacations = 'vacations',
	Visas = 'visas',
}

const password = 'super@Super1user';

export interface VacationPeriod {
	from: string;
	to: string;
}

export const generateVacationDates = (
	startDate: string,
	count: number,
): VacationPeriod[] => {
	const vacations: VacationPeriod[] = [];
	let currentDate = new Date(startDate);

	for (let index = 0; index < count; index++) {
		const startVacation = addDays(
			currentDate,
			faker.number.int({ max: 10, min: 1 }),
		);

		const endVacation = addDays(
			startVacation,
			faker.number.int({ max: 10, min: 1 }),
		);

		if (endVacation > startVacation) {
			vacations.push({
				from: startVacation.toISOString(),
				to: endVacation.toISOString(),
			});
			currentDate = addDays(endVacation, 1);
		} else {
			// Ensure that from date is before to date
			const correctedEndVacation = addDays(startVacation, 1);

			vacations.push({
				from: startVacation.toISOString(),
				to: correctedEndVacation.toISOString(),
			});
			currentDate = addDays(correctedEndVacation, 1);
		}
	}

	return vacations;
};

export const genRandomUsers = async (count: number) => {
	const users = [];

	for (let index = 0; index < count; index++) {
		const { data, error } = await client.auth.admin.createUser({
			email: faker.internet.email(),
			email_confirm: true,
			password,
			user_metadata: {
				username: faker.internet.userName(),
			},
		});

		if (error) throw new Error(error.message);
		users.push(data);
	}

	console.log('🚀 ~ genRandomUsers ~ users:', users);

	return users;
};

export const genAddress = (
	city: Tables<'res_cities'>,
): TablesInsert<'addresses'> => {
	return {
		building: faker.helpers.maybe(() => faker.location.buildingNumber()),
		city_id: city.id,
		country_id: city.country_id,
		landmark: faker.location.street(),
		street: faker.location.streetAddress(),
	};
};

export const genContactInformation = (
	companyName: string,
): TablesInsert<'contact_information'> => {
	return {
		email: faker.internet.email({ firstName: companyName }),
		employee_name: faker.helpers.maybe(() => faker.person.fullName()),
		phone: faker.phone.number(),
		website: faker.internet.url(),
	};
};

export const genTypes = async (entitiesIds: string[], created_by: string) => {
	const flatTypes = Object.entries(typesSeed).flatMap(([category, items]) =>
		items.flatMap(name =>
			entitiesIds.map(
				(owner_id): TablesInsert<'types'> => ({
					category,
					created_by,
					name,
					owner_id,
				}),
			),
		),
	);

	const { data, error } = await client.from('types').insert(flatTypes).select();

	if (error) throw new Error(error.message);

	return data ?? [];
};

export const genJobTitles = (
	owner_id: string,
	created_by: string,
	count: number,
): TablesInsert<'job_titles'>[] => {
	const shuffledTitles = faker.helpers.shuffle(jobTitlesSeed);

	return Array.from({ length: count }).map((_, index) => {
		const item = shuffledTitles[index];

		return { created_by, name: item, owner_id };
	});
};

export const genDriverLicense = (
	entityTypes: Tables<'types'>[],
	employee: Tables<'employees'>,
	created_by: string,
	owner_id: string,
): TablesInsert<'driver_licenses'> => {
	const date_of_issue = faker.date.between({
		from: employee.date_of_birth
			? addYears(new Date(employee.date_of_birth), 18)
			: subYears(new Date(), 5),
		to: new Date(),
	});

	return {
		blood_type_id: faker.helpers.arrayElement(
			entityTypes.filter(
				item => item.category === String(Categories.BloodTypes),
			),
		).id,
		created_by,
		date_of_expiry: addYears(date_of_issue, 10).toISOString(),
		date_of_issue: date_of_issue.toISOString(),
		employee_id: employee.id,
		license_number: faker.string.nanoid({ max: 14, min: 10 }),
		owner_id,
		type: faker.helpers.arrayElement([
			'رخصة القيادة الدولية',
			'رخصة الدراجات البخارية',
			'رخصة القيادة التجارية',
			'رخصة القيادة الخاصة',
		]),
	};
};

export const genIdentificationCards = (
	employee: Tables<'employees'>,
	created_by: string,
	owner_id: string,
): TablesInsert<'identification_cards'> => {
	const date_of_issue = faker.date.between({
		from: employee.date_of_birth
			? addYears(new Date(employee.date_of_birth), 18)
			: subYears(new Date(), 5),
		to: new Date(),
	});

	return {
		created_by,
		date_of_expiry: addYears(new Date(date_of_issue), 7).toISOString(),
		date_of_issue: date_of_issue.toISOString(),
		employee_id: employee.id,
		id_number: faker.string.nanoid({ max: 14, min: 10 }),
		job_title: faker.person.jobTitle(),
		owner_id,
		place_of_issue_id: employee.country_id,
	};
};

export const genPassports = (
	employee: Tables<'employees'>,
	created_by: string,
	owner_id: string,
): TablesInsert<'passports'> => {
	const date_of_issue = faker.date.between({
		from: employee.date_of_birth
			? addYears(new Date(employee.date_of_birth), 18)
			: subYears(new Date(), 5),
		to: new Date(),
	});

	return {
		created_by,
		date_of_expiry: addYears(new Date(date_of_issue), 7).toISOString(),
		date_of_issue: date_of_issue.toISOString(),
		employee_id: employee.id,
		job_title: faker.person.jobTitle(),
		owner_id,
		place_of_issue_id: employee.country_id,
	};
};

export const genVacations = (
	entityTypes: Tables<'types'>[],
	employee: Tables<'employees'>,
	created_by: string,
	owner_id: string,
): TablesInsert<'vacations'>[] => {
	const date_of_hiring = employee.date_of_hiring
		? new Date(employee.date_of_hiring)
		: subYears(new Date(), 1);

	const totalYears = differenceInYears(new Date(), date_of_hiring);
	const vacationCount = totalYears * faker.number.int({ max: 30, min: 5 });

	const vacations = generateVacationDates(
		date_of_hiring.toISOString(),
		vacationCount,
	);

	return vacations.map(({ from, to }) => {
		const vacationType = faker.helpers.arrayElement(
			entityTypes.filter(
				item => item.category === String(Categories.Vacations),
			),
		);

		return {
			created_at: subDays(
				new Date(from),
				faker.number.int({ max: 7, min: 1 }),
			).toISOString(),
			created_by,
			employee_id: employee.id,
			from,
			name: `Vacation Request Title: ${faker.lorem.sentence()}`,
			owner_id,
			to,
			vacation_type_id: vacationType.id,
		};
	});
};

export interface GenBankAccounts {
	banks: Tables<'banks'>[];
	countries: Tables<'res_countries'>[];
	created_by: string;
	employee: Tables<'employees'>;
	owner_id: string;
}

export const genBankAccount = ({
	banks,
	countries,
	created_by,
	employee,
	owner_id,
}: GenBankAccounts): TablesInsert<'bank_accounts'>[] => {
	const accountBanks = faker.helpers.arrayElements(
		faker.helpers.shuffle(banks),
		{ max: 3, min: 1 },
	);

	const country = countries.find(item => item.id === employee.country_id);

	let iban: string;

	try {
		iban = faker.finance.iban({ countryCode: country?.iso2 });
	} catch {
		iban = faker.finance.iban();
	}

	return accountBanks.map(item => ({
		bank_id: item.id,
		created_by,
		employee_id: employee.id,
		iban,
		owner_id,
	}));
};

export interface GenEntity {
	created_by: string;
	entity_types: Tables<'entity_types'>[];
	res_cities: Tables<'res_cities'>[];
	res_countries: Tables<'res_countries'>[];
}

export const genEntity = ({
	created_by,
	entity_types,
	res_cities,
	res_countries,
}: GenEntity): TablesInsert<'entities'> => {
	const city = faker.helpers.arrayElement(res_cities);
	const companyName = faker.company.name();

	return {
		activity: faker.person.jobArea(),
		ceo_id: created_by,
		created_by,
		entity_type_id: faker.helpers.arrayElement(
			entity_types.map(item => item.id),
		),
		established: faker.number.int({ max: 2023, min: 1980 }),
		name: companyName,
		nationality_id: res_countries.find(item => item.id === city.country_id)?.id,
		slogan: faker.company.catchPhrase(),
		tax_number: faker.finance.accountNumber(),
		trading_number: faker.finance.accountNumber(),
		type: faker.company.buzzVerb(),
		...genAddress(city),
		...genContactInformation(companyName),
	};
};

export const genEmployee = async (
	res_cities: Tables<'res_cities'>[],
): Promise<TablesInsert<'employees'>> => {
	const { data, error } = await client.auth.admin.createUser({
		email: faker.internet.email(),
		email_confirm: true,
		password,
		user_metadata: {
			username: faker.internet.userName(),
		},
	});

	if (error) throw new Error(error.message);

	const cities = faker.helpers.arrayElements(res_cities, { max: 2, min: 1 });
	const cityOfBirth = faker.helpers.arrayElement(cities);

	const gender = faker.helpers.enumValue(Genders);

	const date_of_birth = faker.date.birthdate({
		max: 60,
		min: 20,
		mode: 'age',
	});

	const minHiringYear = addYears(new Date(date_of_birth), 18);
	const maxHiringYear = new Date();

	const date_of_hiring = faker.date.between({
		from: minHiringYear,
		to: maxHiringYear,
	});

	return {
		city_of_birth_id: cityOfBirth.id,
		country_of_birth_id: cityOfBirth.country_id,
		date_of_birth: date_of_birth.toISOString(),
		date_of_hiring: date_of_hiring.toISOString(),
		date_of_termination: faker.helpers.maybe(
			() => faker.date.future({ refDate: date_of_hiring }).toISOString(),
			{ probability: 0.1 },
		),
		full_name: faker.person.fullName({ sex: gender }),
		gender,
		id: data.user.id,
		phone: faker.phone.number(),
		...genAddress(faker.helpers.arrayElement(cities)),
	};
};

export interface GenContract {
	created_by: string;
	employee_id: string;
	hiring_date: null | string;
	job_title_id: string | undefined;
	owner_id: string;
	recruitment_agencies_id?: null | string;
	types: Tables<'types'>[];
	work_hour_id?: null | string;
}

export const genContract = ({
	created_by,
	employee_id,
	hiring_date,
	job_title_id,
	owner_id,
	recruitment_agencies_id,
	types,
	work_hour_id,
}: GenContract): TablesInsert<'contracts'> => {
	const contractTypes = types.filter(
		item => item.category === String(Categories.Contracts),
	);

	return {
		contract_type_id: faker.helpers.arrayElement(contractTypes).id,
		created_by,
		date_of_start: hiring_date
			? faker.date.past({ refDate: hiring_date }).toISOString()
			: null,
		employee_id,
		insurance: true,
		job_title_id,
		maximum_retirement_renewal_age: faker.helpers.arrayElement([
			60,
			62,
			65,
			70,
			null,
		]),
		owner_id,
		period: faker.helpers.arrayElement([6, 12, 24, 48, null]),
		probation_period: faker.helpers.arrayElement([30, 60, 90]),
		recruitment_agencies_id,
		retirement_age: faker.helpers.arrayElement([50, 55, 60, null]),
		retirement_renewal_period: faker.helpers.arrayElement([3, 6, 12, null]),
		salary: faker.number.int({ max: 30_000, min: 5000 }),
		work_hour_id,
	};
};

export const genRecruitmentAgencies = (
	res_cities: Tables<'res_cities'>[],
	created_by: string,
): TablesInsert<'recruitment_agencies'> => {
	const city = faker.helpers.arrayElement(res_cities);
	const companyName = faker.company.name();

	return {
		name: companyName,
		...genAddress(city),
		...genContactInformation(companyName),
		created_by,
	};
};
