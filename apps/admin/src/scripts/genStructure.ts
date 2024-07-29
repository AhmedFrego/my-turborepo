// @ts-nocheck - skip
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import fs from 'fs-extra';
import hashIt from 'hash-it';
import sortBy from 'lodash/sortBy';
import { format } from 'prettier';
import { Database } from 'src/common';

dotenv.config();

const isForeignKeyHash = hashIt('isForeignKey');
const referencedTableHash = hashIt('referencedTable');
const columnsHash = hashIt('columns');
const tableHash = hashIt('table');
const defaultValueHash = hashIt('defaultValue');
const nameHash = hashIt('name');
const nullableHash = hashIt('nullable');
const typeHash = hashIt('type');
const userTypeHash = hashIt('userType');

const getOwnerHash = hashIt('get_owner()');
const timestampWithTimeZoneHash = hashIt('timestamp with time zone');
const dateHash = hashIt('date');
const createdByHash = hashIt('created_by()');
const userDefinedHash = hashIt('USER-DEFINED');
const uuidHash = hashIt('gen_random_uuid()');
const defaultTimestampWithTimeZoneHash = hashIt(
	"(now() AT TIME ZONE 'utc'::text)",
);

const prettierFormat = async (fileContent: string) =>
	format(fileContent, { parser: 'typescript' });

export const supabase = createClient<Database>(
	process.env.VITE_SUPABASE_URL!,
	process.env.VITE_SUPABASE_ANON_KEY!,
);

interface Column {
	defaultValue: string;
	name: string;
	nullable: boolean;
	type: string;
	userType: string;
}

const getStructure = async () => {
	const { data, error } = await supabase
		.from('database_structure')
		.select()
		.returns<{ columns: Column[]; table_name: string }[]>();

	// eslint-disable-next-line @typescript-eslint/no-throw-literal
	if (error) throw error;

	const constants = [
		`import { StructureTable } from 'src/types';\n`,
		`export const isForeignKeyHash = ${isForeignKeyHash}`,
		`export const referencedTableHash = ${referencedTableHash}`,
		`export const columnsHash = ${columnsHash}`,
		`export const tableHash = ${tableHash}`,
		`export const defaultValueHash = ${defaultValueHash}`,
		`export const nameHash = ${nameHash}`,
		`export const nullableHash = ${nullableHash}`,
		`export const typeHash = ${typeHash}`,
		`export const userTypeHash = ${userTypeHash}`,
		`export const getOwner = ${getOwnerHash};`,
		`export const timestampWithTimeZone = ${timestampWithTimeZoneHash};`,
		`export const defaultTimestampWithTimeZone = ${defaultTimestampWithTimeZoneHash};`,
		`export const dateUserType = ${dateHash};`,
		`export const createdBy = ${createdByHash};`,
		`export const userDefined = ${userDefinedHash};`,
		`export const uuid = ${uuidHash};\n`,
		`export const structure: StructureTable[] = `,
	];

	const sottedData = sortBy(data, 'table_name');

	const columns = JSON.stringify(
		sottedData.map(({ columns, table_name }) => {
			const sortedColumns = sortBy(
				columns.map(({ defaultValue, name, nullable, type, userType }) => ({
					[defaultValueHash]: hashIt(defaultValue),
					[nameHash]: hashIt(name),
					[nullableHash]: hashIt(nullable),
					[typeHash]: hashIt(type),
					[userTypeHash]: hashIt(userType),
				})),
				nameHash,
			);

			return {
				[columnsHash]: sortedColumns,
				[tableHash]: table_name,
			};
		}),
	)
		.replaceAll(`"${tableHash}"`, '[tableHash]')
		.replaceAll(`"${columnsHash}"`, '[columnsHash]')
		.replaceAll(`"${defaultValueHash}"`, '[defaultValueHash]')
		.replaceAll(`"${nameHash}"`, '[nameHash]')
		.replaceAll(`"${nullableHash}"`, '[nullableHash]')
		.replaceAll(`"${typeHash}"`, '[typeHash]')
		.replaceAll(`"${userTypeHash}"`, '[userTypeHash]')
		.replaceAll(getOwnerHash, 'getOwner')
		.replaceAll(timestampWithTimeZoneHash, 'timestampWithTimeZone')
		.replaceAll(
			defaultTimestampWithTimeZoneHash,
			'defaultTimestampWithTimeZone',
		)
		.replaceAll(dateHash, 'dateUserType')
		.replaceAll(createdByHash, 'createdBy')
		.replaceAll(userDefinedHash, 'userDefined')
		.replaceAll(uuidHash, 'uuid');

	const content = constants.join('\n') + columns;
	const formattedContent = await prettierFormat(content);

	fs.writeFile('src/common/structure.ts', formattedContent, {
		flag: 'w',
	}).catch(console.log);
};

// eslint-disable-next-line unicorn/prefer-top-level-await
getStructure().catch(console.log);
