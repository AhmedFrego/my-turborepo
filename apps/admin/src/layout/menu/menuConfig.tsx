import AccessAlarm from '@mui/icons-material/AccessAlarmTwoTone';
import AccessTime from '@mui/icons-material/AccessTimeTwoTone';
import AccountBalanceWallet from '@mui/icons-material/AccountBalanceWalletTwoTone';
import AssignmentTurnedIn from '@mui/icons-material/AssignmentTurnedInTwoTone';
import Assistant from '@mui/icons-material/AssistantTwoTone';
import AttachMoney from '@mui/icons-material/AttachMoneyTwoTone';
import BeachAccess from '@mui/icons-material/BeachAccessTwoTone';
import BusinessCenter from '@mui/icons-material/BusinessCenterTwoTone';
import Business from '@mui/icons-material/BusinessTwoTone';
import CardGiftcard from '@mui/icons-material/CardGiftcardTwoTone';
import CurrencyExchange from '@mui/icons-material/CurrencyExchangeTwoTone';
import CurrencyPound from '@mui/icons-material/CurrencyPoundTwoTone';
import Dashboard from '@mui/icons-material/DashboardTwoTone';
import Diversity3 from '@mui/icons-material/Diversity3TwoTone';
import DnsTwoToneIcon from '@mui/icons-material/DnsTwoTone';
import ExitToApp from '@mui/icons-material/ExitToAppTwoTone';
import HailTwoToneIcon from '@mui/icons-material/HailTwoTone';
import MonetizationOn from '@mui/icons-material/MonetizationOnTwoTone';
import MoneyOff from '@mui/icons-material/MoneyOffTwoTone';
import PlaylistAddCheckCircle from '@mui/icons-material/PlaylistAddCheckCircleTwoTone';
import PriceChange from '@mui/icons-material/PriceChangeTwoTone';
import Receipt from '@mui/icons-material/ReceiptTwoTone';
import Schedule from '@mui/icons-material/ScheduleTwoTone';
import ShoppingCart from '@mui/icons-material/ShoppingCartTwoTone';
import SoapTwoToneIcon from '@mui/icons-material/SoapTwoTone';
import SwapHoriz from '@mui/icons-material/SwapHorizTwoTone';
import SyncProblem from '@mui/icons-material/SyncProblemTwoTone';
import TrendingUp from '@mui/icons-material/TrendingUpTwoTone';
import VerifiedUser from '@mui/icons-material/VerifiedUserTwoTone';
import { structure, tableHash } from 'src/common';
import { AdminRoutes } from 'src/constants';
import { Logger } from 'src/utils';

import { MenuItemProps } from './MenuItem';

export type MenuItemConfig = { subItems?: MenuItemConfig[] } & MenuItemProps;
export type MenuConfig = MenuItemConfig[];

export const config: MenuConfig = [
	{
		icon: <Dashboard />,
		label: 'ra.page.dashboard',
		name: 'dashboard',
		to: '/',
	},
	{
		reference: 'announcements',
	},
	// Personnel related items
	{
		icon: <Diversity3 />,
		label: 'global_menu.personnel',
		name: 'company_employees',
		subItems: [
			{ reference: 'employees' },
			{ reference: 'emergency_contacts' },
			{ icon: <Diversity3 />, reference: 'relatives' },
			{ reference: 'addresses' },
			{ reference: 'certifications' },
			{ reference: 'employee_reports' },
			{ reference: 'vacations' },
			{ reference: 'contracts' },
			{ reference: 'job_titles' },
			{ reference: 'driver_licenses' },
			{ reference: 'identification_cards' },
			{ reference: 'passports' },
			{ reference: 'residencies' },
			{ reference: 'visas' },
		],
	},
	// Financial information related items
	{
		icon: <PriceChange />,
		label: 'global_menu.financial_information',
		name: 'financial_information',
		subItems: [
			{
				icon: <CurrencyExchange />,
				label: 'custom.pages.payroll_items',
				name: 'payroll_items',
				to: AdminRoutes.PayrollItems,
			},
			{ icon: <SoapTwoToneIcon />, reference: 'advances' },
			{ icon: <MonetizationOn />, reference: 'allowances' },
			{ icon: <CardGiftcard />, reference: 'bonuses' },
			{ icon: <MonetizationOn />, reference: 'commissions' },
			{ icon: <MoneyOff />, reference: 'deductions' },
			{ icon: <Receipt />, reference: 'expenses' },
			{ icon: <MoneyOff />, reference: 'payroll_deductions' },
		],
	},
	// Entities related items
	{
		reference: 'entities',
		subItems: [
			{ reference: 'entities' },
			{ reference: 'departments' },
			{ icon: <DnsTwoToneIcon />, reference: 'entity_types' },
			{ reference: 'policies' },
			{ reference: 'work_hours' },
			{ reference: 'work_locations' },
		],
	},
	// Requests related items
	{ reference: 'requests' },
	{
		icon: <HailTwoToneIcon />,
		label: 'global_menu.requests.personnel',
		name: 'requests.personnel',
		subItems: [
			{ icon: <AttachMoney />, reference: 'request_benefits' },
			{
				icon: <AssignmentTurnedIn />,
				reference: 'request_delegations',
			},
			{
				icon: <Business />,
				reference: 'request_external_delegations',
			},
			{
				icon: <BusinessCenter />,
				reference: 'request_internal_delegations',
			},
			{ icon: <VerifiedUser />, reference: 'request_permissions' },
			{ icon: <TrendingUp />, reference: 'request_promotions' },
			{
				icon: <AccessTime />,
				reference: 'request_punctuality_changes',
			},
			{ icon: <ShoppingCart />, reference: 'request_purchases' },
			{ icon: <ExitToApp />, reference: 'request_resignations' },
			{
				icon: <AccessAlarm />,
				reference: 'request_retirement_age_extensions',
			},
			{ icon: <SwapHoriz />, reference: 'request_transfers' },
			{ icon: <BeachAccess />, reference: 'request_vacations' },
			{
				icon: <Schedule />,
				reference: 'request_work_hours_changes',
			},
		],
	},
	{
		icon: <CurrencyPound />,
		label: 'global_menu.requests.financial',
		name: 'requests.financial',
		subItems: [
			{ icon: <SoapTwoToneIcon />, reference: 'request_advances' },
			{ icon: <MonetizationOn />, reference: 'request_allowances' },
			{ icon: <CardGiftcard />, reference: 'request_bonuses' },
			{ icon: <MonetizationOn />, reference: 'request_commissions' },
			{ icon: <Receipt />, reference: 'request_expenses' },
			{ icon: <Schedule />, reference: 'request_installments' },
			{
				icon: <MoneyOff />,
				reference: 'request_payroll_deductions_cancels',
			},
			{ icon: <AttachMoney />, reference: 'request_salary_raises' },
			{
				icon: <AccountBalanceWallet />,
				reference: 'request_settlements',
			},
		],
	},
	{
		icon: <PlaylistAddCheckCircle />,
		label: 'resources.requests.name',
		name: 'resources.requests',
	},
	{
		icon: <Assistant />,
		reference: 'proposals',
	},
	{
		icon: <SyncProblem />,
		reference: 'complaints',
	},
	{ reference: 'types' },
];

const fillMissingNames = (items: MenuConfig): MenuConfig => {
	return items.map(item => {
		// Create a copy of the item
		const newItem = { ...item };

		// If 'name' is missing but 'reference' is present, fill 'name' with the value of 'reference'
		if (!newItem.name) {
			newItem.name = newItem.reference;
		}

		// If the item has 'subItems', recursively call this function on the 'subItems'
		if (newItem.subItems && Array.isArray(newItem.subItems)) {
			newItem.subItems = fillMissingNames(newItem.subItems);
		}

		return newItem;
	});
};

export const parsedConfig = fillMissingNames(config);

const parseMenu = (items: MenuItemConfig[]) => {
	const references: string[] = [];

	for (const item of items) {
		const { reference, subItems } = item;

		reference && references.push(reference);
		if (subItems) references.push(...parseMenu(subItems));
	}

	return references;
};

export const flattenMenu = (items: MenuConfig): MenuItemProps[] => {
	const references: MenuItemConfig[] = [];

	for (const item of items) {
		const { subItems, ...rest } = item;

		references.push(rest);
		if (subItems) references.push(...flattenMenu(subItems));
	}

	return references;
};

export const impMenu = parseMenu(parsedConfig);

const haystack = structure
	.map(item => item[tableHash])
	.filter(item => !impMenu.map(element => element).includes(item));

Logger.log(haystack);
