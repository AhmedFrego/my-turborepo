import Warning from '@mui/icons-material/WarningTwoTone';
import {
	Grid,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material';
import sum from 'lodash/sum';
import React from 'react';
import { CardWithIcon } from 'src/components';
import {
	useCreatePath,
	useGetList,
	useGetRecordRepresentation,
	useTranslate,
} from 'src/hooks';
import { inFilter } from 'src/utils';

export interface PayrollItemsProps {}

export const PayrollItems: React.FC<PayrollItemsProps> = () => {
	const translate = useTranslate();
	const getEmployeeLabel = useGetRecordRepresentation('employees');
	const createPath = useCreatePath();

	const { data: employees } = useGetList('employees', {
		pagination: { page: 1, perPage: 1000 },
	});

	const enabled = !!employees?.length;
	const pagination = { page: 1, perPage: 1000 };

	const filter = inFilter(
		'employee_id',
		employees?.map(item => item.id),
	);

	const { data: contracts } = useGetList(
		'contracts',
		{ filter, pagination },
		{ enabled },
	);

	const { data: deductions } = useGetList(
		'deductions',
		{ filter, pagination },
		{ enabled },
	);

	const { data: bonuses } = useGetList(
		'bonuses',
		{ filter, pagination },
		{ enabled },
	);

	const { data: commissions } = useGetList(
		'commissions',
		{
			filter,
			pagination: { page: 1, perPage: 1000 },
		},
		{ enabled },
	);

	const { data: allowances } = useGetList(
		'allowances',
		{
			filter,
			pagination: { page: 1, perPage: 1000 },
		},
		{ enabled },
	);

	const employeesData = employees?.map(row => {
		const { full_name, id } = row;

		const salary =
			contracts?.find(item => item.employee_id === id)?.salary ?? 0;

		const employeesDeductions = sum(
			deductions
				?.filter(item => item.employee_id === id)
				.map(item => item.amount) ?? [],
		);

		const employeesBonuses = sum(
			bonuses
				?.filter(item => item.employee_id === id)
				.map(item => item.amount) ?? [],
		);

		const employeesCommissions = sum(
			commissions
				?.filter(item => item.employee_id === id)
				.map(item => item.amount) ?? [],
		);

		const employeesAllowances = sum(
			allowances
				?.filter(item => item.employee_id === id)
				.map(item => item.suggested_amount) ?? [],
		);

		const netSalary =
			salary -
			employeesDeductions +
			employeesBonuses +
			employeesCommissions +
			employeesAllowances;

		return {
			employee: row,
			employeesAllowances,
			employeesBonuses,
			employeesCommissions,
			employeesDeductions,
			full_name,
			id,
			netSalary: Number.isNaN(netSalary) ? 0 : netSalary,
			salary,
		};
	});

	const headerStyle = { fontSize: 16, fontWeight: 600 };

	return (
		<>
			<Grid
				container
				mb={2}
				spacing={2}
			>
				<Grid
					item
					md={3}
				>
					<CardWithIcon
						color="info"
						icon={<Warning fontSize="large" />}
						subtitle={deductions?.length}
						title={translate('resources.deductions.name', {
							smart_count: 2,
						})}
						to={{
							pathname: createPath({ resource: 'deductions' }),
							search: 'filter={}',
						}}
					/>
				</Grid>
				<Grid
					item
					md={3}
				>
					<CardWithIcon
						color="success"
						icon={<Warning fontSize="large" />}
						subtitle={bonuses?.length}
						title={translate('resources.bonuses.name', { smart_count: 2 })}
						to={{
							pathname: createPath({ resource: 'bonuses' }),
							search: 'filter={}',
						}}
					/>
				</Grid>
				<Grid
					item
					md={3}
				>
					<CardWithIcon
						color="success"
						icon={<Warning fontSize="large" />}
						subtitle={commissions?.length}
						title={translate('resources.commissions.name', { smart_count: 2 })}
						to={{
							pathname: createPath({ resource: 'commissions' }),
							search: 'filter={}',
						}}
					/>
				</Grid>
				<Grid
					item
					md={3}
				>
					<CardWithIcon
						color="success"
						icon={<Warning fontSize="large" />}
						subtitle={allowances?.length}
						title={translate('resources.allowances.name', { smart_count: 2 })}
						to={{
							pathname: createPath({ resource: 'allowances' }),
							search: 'filter={}',
						}}
					/>
				</Grid>
			</Grid>
			<TableContainer component={Paper}>
				<Table
					stickyHeader
					aria-label="spanning table"
					sx={{ minWidth: 700 }}
				>
					<TableHead>
						<TableRow>
							<TableCell sx={headerStyle}>
								{translate('resources.employees.fields.full_name')}
							</TableCell>
							<TableCell sx={headerStyle}>
								{translate('custom.common.net_salary')}
							</TableCell>
							<TableCell sx={headerStyle}>
								{translate('resources.contracts.fields.salary')}
							</TableCell>
							<TableCell sx={headerStyle}>
								{translate('resources.deductions.name', { smart_count: 2 })}
							</TableCell>
							<TableCell sx={headerStyle}>
								{translate('resources.bonuses.name', { smart_count: 2 })}
							</TableCell>
							<TableCell sx={headerStyle}>
								{translate('resources.commissions.name', { smart_count: 2 })}
							</TableCell>
							<TableCell sx={headerStyle}>
								{translate('resources.allowances.name', { smart_count: 2 })}
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{employeesData?.map(row => {
							const {
								employee,
								employeesAllowances,
								employeesBonuses,
								employeesCommissions,
								employeesDeductions,
								id,
								netSalary,
								salary,
							} = row;

							return (
								<TableRow key={id}>
									<TableCell sx={headerStyle}>
										{getEmployeeLabel(employee)}
									</TableCell>
									<TableCell>{netSalary}</TableCell>
									<TableCell>{salary}</TableCell>
									<TableCell>{employeesDeductions}</TableCell>
									<TableCell>{employeesBonuses}</TableCell>
									<TableCell>{employeesCommissions}</TableCell>
									<TableCell>{employeesAllowances}</TableCell>
								</TableRow>
							);
						})}
						<TableRow>
							<TableCell sx={headerStyle}>
								{translate('custom.common.total')}
							</TableCell>
							<TableCell sx={headerStyle}>
								{sum(
									employeesData
										?.map(item => item.netSalary)
										.filter(element => typeof element === 'number'),
								)}
							</TableCell>
							<TableCell sx={headerStyle}>
								{sum(
									employeesData
										?.map(item => item.salary)
										.filter(element => typeof element === 'number'),
								)}
							</TableCell>
							<TableCell sx={headerStyle}>
								{sum(
									employeesData
										?.map(item => item.employeesDeductions)
										.filter(element => typeof element === 'number'),
								)}
							</TableCell>
							<TableCell sx={headerStyle}>
								{sum(
									employeesData
										?.map(item => item.employeesBonuses)
										.filter(element => typeof element === 'number'),
								)}
							</TableCell>
							<TableCell sx={headerStyle}>
								{sum(
									employeesData
										?.map(item => item.employeesCommissions)
										.filter(element => typeof element === 'number'),
								)}
							</TableCell>
							<TableCell sx={headerStyle}>
								{sum(
									employeesData
										?.map(item => item.employeesAllowances)
										.filter(element => typeof element === 'number'),
								)}
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
