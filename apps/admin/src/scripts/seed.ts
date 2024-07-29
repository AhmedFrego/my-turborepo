import { faker } from '@faker-js/faker';
import { sentenceCase } from 'change-case';
import snakeCase from 'lodash/snakeCase';

import { client } from './client';
import {
	Categories,
	genBankAccount,
	genContract,
	genDriverLicense,
	genEmployee,
	genEntity,
	genIdentificationCards,
	genJobTitles,
	genPassports,
	genRandomUsers,
	genRecruitmentAgencies,
	genTypes,
	genVacations,
} from './seed-helpers';
import { TablesInsert } from './supabase';
import { banksSeed } from './types';

export enum EntityLevel {
	administration = 'administration',
	branch = 'branch',
	company = 'company',
}

// eslint-disable-next-line sonarjs/cognitive-complexity
const seed = async () => {
	const users = await genRandomUsers(1);
	const entity_levels = Object.values(EntityLevel);

	const { data: entity_types = [], error: entity_typesError } = await client
		.from('entity_types')
		.insert(
			entity_levels.map(
				(level): TablesInsert<'entity_types'> => ({
					category: Categories.Entities,
					created_by: faker.helpers.arrayElement(users).user.id,
					description: `${sentenceCase(level)} Description`,
					level,
					name: { en: sentenceCase(level) },
					slug: snakeCase(level),
				}),
			),
		)
		.select();

	if (entity_typesError) throw new Error(entity_typesError.message);

	const { data: res_cities, error: res_citiesError } = await client
		.from('res_cities')
		.select()
		.limit(1000);

	if (res_citiesError) throw new Error(res_citiesError.message);

	const { data: res_countries, error: res_countriesError } = await client
		.from('res_countries')
		.select()
		.limit(1000);

	if (res_countriesError) throw new Error(res_countriesError.message);

	for (const superUser of users) {
		const created_by = superUser.user.id;

		const { data: recruitment_agencies, error: recruitment_agenciesError } =
			await client
				.from('recruitment_agencies')
				.insert(
					Array.from({ length: faker.number.int({ max: 3, min: 1 }) }).map(() =>
						genRecruitmentAgencies(res_cities, created_by),
					),
				)
				.select();

		if (recruitment_agenciesError)
			throw new Error(recruitment_agenciesError.message);

		const { data: entities, error: entitiesError } = await client
			.from('entities')
			.insert(
				Array.from({ length: faker.number.int({ max: 3, min: 1 }) }).map(() =>
					genEntity({
						created_by,
						entity_types: entity_types ?? [],
						res_cities: res_cities ?? [],
						res_countries: res_countries ?? [],
					}),
				),
			)
			.select();

		if (entitiesError) throw new Error(entitiesError.message);

		const allTypes = await genTypes(
			entities?.map(entity => entity.id) ?? [],
			created_by,
		);

		for (const entity of entities ?? []) {
			const owner_id = entity.id;

			const entityTypes = allTypes.filter(item => item.owner_id === owner_id);

			const numberOfEmployees = faker.number.int({ max: 50, min: 5 });

			const jobTitlesData = genJobTitles(
				owner_id,
				created_by,
				numberOfEmployees,
			);

			const employeesData = await Promise.all(
				Array.from({
					length: numberOfEmployees,
				}).map(() => genEmployee(res_cities ?? [])),
			);

			const { data: work_hours, error: work_hoursError } = await client
				.from('work_hours')
				.upsert([
					{
						created_by,
						from: '2023-12-29 09:00:00+00',
						owner_id,
						to: '2023-12-29 19:00:00+00',
					},
					{
						created_by,
						from: '2023-12-29 10:00:00+00',
						owner_id,
						to: '2023-12-29 20:00:00+00',
					},
				])
				.select();

			if (work_hoursError) throw new Error(work_hoursError.message);

			const { data: banks, error: banksError } = await client
				.from('banks')
				.upsert(banksSeed?.map(item => ({ created_by, name: item, owner_id })))
				.select();

			if (banksError) throw new Error(banksError.message);

			const { data: employees, error: employeesError } = await client
				.from('employees')
				.upsert(employeesData)
				.select();

			if (employeesError) throw new Error(employeesError.message);

			const { error: bank_accountsError } = await client
				.from('bank_accounts')
				.upsert(
					employees?.flatMap(employee =>
						genBankAccount({
							banks,
							countries: res_countries,
							created_by: employee.id,
							employee,
							owner_id,
						}),
					),
				)
				.select();

			if (bank_accountsError) throw new Error(bank_accountsError.message);

			const { error: entity_employeesError } = await client
				.from('join_entity_employees')
				.upsert(
					employees
						?.map(item => item.id)
						// '167afa4a-f147-4620-8dbc-f9e17dfbbf80',
						// '2886d0c4-555b-4cef-b77d-8ce946bad8ce',
						// '78128d7c-e76f-44c5-8c2a-54df0b4acd9b',
						.map(employee_id => ({
							created_by,
							employee_id,
							entity_id: owner_id,
							owner_id,
						})),
				)
				.select();

			if (entity_employeesError) throw new Error(entity_employeesError.message);

			const { data: jobTitles, error: jobTitlesError } = await client
				.from('job_titles')
				.upsert(jobTitlesData)
				.select();

			if (jobTitlesError) throw new Error(jobTitlesError.message);

			const { error: driver_licensesError } = await client
				.from('driver_licenses')
				.upsert(
					faker.helpers
						.arrayElements(faker.helpers.shuffle(employees), {
							max: employees?.length,
							min: 1,
						})
						.map(employee =>
							genDriverLicense(entityTypes, employee, created_by, owner_id),
						),
				)
				.select();

			if (driver_licensesError) throw new Error(driver_licensesError.message);

			const { error: identification_cardsError } = await client
				.from('identification_cards')
				.upsert(
					faker.helpers
						.arrayElements(faker.helpers.shuffle(employees), {
							max: employees?.length,
							min: 1,
						})
						.map(employee =>
							genIdentificationCards(employee, created_by, owner_id),
						),
				)
				.select();

			if (identification_cardsError)
				throw new Error(identification_cardsError.message);

			const { error: passportsError } = await client
				.from('passports')
				.upsert(
					faker.helpers
						.arrayElements(faker.helpers.shuffle(employees), {
							max: employees?.length,
							min: 1,
						})
						.map(employee => genPassports(employee, created_by, owner_id)),
				)
				.select();

			if (passportsError) throw new Error(passportsError.message);

			const { error: vacationsError } = await client
				.from('vacations')
				.upsert(
					employees?.flatMap(employee =>
						genVacations(entityTypes, employee, created_by, owner_id),
					),
				)
				.select();

			if (vacationsError) throw new Error(vacationsError.message);

			const contractsData = employees?.map((item, index) => {
				const jobTitle = jobTitles?.[index].id;

				return genContract({
					created_by,
					employee_id: item.id,
					hiring_date: item.date_of_hiring,
					job_title_id: jobTitle,
					owner_id,
					recruitment_agencies_id: faker.helpers.arrayElement(
						recruitment_agencies.map(item => item.id),
					),
					types: entityTypes,
					work_hour_id: faker.helpers.arrayElement(
						work_hours.map(item => item.id),
					),
				});
			});

			const { error: contractsError } = await client
				.from('contracts')
				.insert(contractsData ?? [])
				.select();

			if (contractsError) throw new Error(contractsError.message);
		}
	}
};

// eslint-disable-next-line unicorn/prefer-top-level-await
seed().catch(console.error);
