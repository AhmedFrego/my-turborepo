import Brightness7Icon from '@mui/icons-material/Brightness7TwoTone';
import PowerSettingsNew from '@mui/icons-material/PowerSettingsNewTwoTone';
import { useTheme } from '@mui/material';
import {
	Action,
	ActionId,
	ActionImpl,
	KBarProvider as BaseKBarProvider,
	KBarProviderProps as BaseKBarProviderProps,
	KBarOptions,
} from 'kbar';
import React from 'react';
import {
	removeDoubleSlashes,
	useBasename,
	useTheme as useRaTheme,
} from 'react-admin';
import { FlagImage } from 'react-international-phone';
import { useNavigate } from 'react-router-dom';
import { AdminRoutes, CommandSections, PaletteMode } from 'src/constants';
import {
	useChangeLanguage,
	useChangeThemeName,
	useCreatePath,
	useLogout,
	usePermissions,
	useTranslate,
} from 'src/hooks';
import { TranslationsPaths } from 'src/locales';
import { AdminServices } from 'src/resources';
import { themes } from 'src/themes';
import { AdminService, PublicTables } from 'src/types';
import { LocalizationLanguages, Logger, useCanAccessFunction } from 'src/utils';

import { Actions } from './Actions';

type keywords = (string | string[])[];

export interface AppAction {
	icon?: React.ReactElement | React.ReactNode | string;
	id: ActionId;
	keywords?: keywords;
	name: TranslationsPaths;
	parent?: ActionId;
	perform?: (currentActionImpl: ActionImpl) => void;
	priority?: number;
	section?: { name: CommandSections; priority: number } | CommandSections;
	shortcut?: string[];
	subtitle?: string;
}

const keywordsString = (...strings: keywords) =>
	strings.length > 0 ? strings.flat().join(' ') : strings.join(' ');

export interface KBarProviderProps extends BaseKBarProviderProps {}

export const KBarProvider: React.FC<
	React.PropsWithChildren<KBarProviderProps>
> = props => {
	const { actions = [], children, options } = props;
	const basename = useBasename();
	const navigate = useNavigate();
	const createPath = useCreatePath();
	const [, setTheme] = useRaTheme();
	const translate = useTranslate();
	const theme = useTheme();
	const [, changeLanguage] = useChangeLanguage();
	const logout = useLogout();
	const { permissions } = usePermissions();
	const [, changeThemeName] = useChangeThemeName();
	const { canAccess } = useCanAccessFunction();

	if (!permissions) return null;

	const priorityResources: AppAction[] = (
		['employees', 'entities'] as PublicTables[]
	).map(resource => ({
		id: resource,
		keywords: ['list', resource],
		name: `resources.${resource}.name_other`,
		perform: () => {
			navigate(createPath({ resource }));
		},
	}));

	const sections: AppAction[] = [];

	const pages: AppAction[] = [
		AdminRoutes.Configuration,
		AdminRoutes.HotKeys,
		AdminRoutes.OrganizationStructure,
		AdminRoutes.MyRequestHistory,
		AdminRoutes.PayrollItems,
	]
		.filter(item => canAccess({ action: 'access', resource: item }))
		.map<AppAction>(item => {
			const label = `custom.pages.${item}` as const;

			return {
				id: item,
				keywords: ['pages', item, label],
				name: label,
				perform: () => {
					navigate(removeDoubleSlashes(`${basename}/${item}`));
				},
				section: CommandSections.Pages,
			};
		});

	const themesActions: AppAction[] = [
		{
			id: 'themes',
			keywords: ['themes'],
			name: 'command.sections.themes',
			section: CommandSections.Themes,
		},
		...themes.map<AppAction>(({ name }) => {
			return {
				id: name,
				keywords: ['theme', name],
				name: `themes.${name}`,
				parent: 'themes',
				perform: () => {
					changeThemeName(name);
				},
			};
		}),
	];

	const resources = (
		type: 'create' | 'list',
		options?: { keywords?: string[] },
	): AppAction[] => {
		const { keywords = [] } = options ?? {};

		const section =
			type === 'create' ? CommandSections.Create : CommandSections.List;

		return [
			{
				id: `resources_${type}`,
				keywords: [...keywords, type],
				name: `command.sections.${section}`,
				section,
			},
			...Object.values(AdminServices)
				.filter(
					item =>
						!item.name.startsWith('join_') &&
						!item.name.startsWith('base_') &&
						!item.name.startsWith('res_'),
				)
				.map<AppAction>(({ icon: Icon, name }: AdminService) => {
					const label = `resources.${name}.name_other` as const;

					return {
						icon: Icon && <Icon />,
						id: `resource_${name}_${type}`,
						keywords: ['resource', type, name, label, ...keywords],
						name: label,
						parent: `resources_${type}`,
						perform: () => {
							navigate(createPath({ resource: name, type }));
						},
					};
				}),
		];
	};

	const modeActions: AppAction[] = Object.values(PaletteMode).map(mode => ({
		icon: <Brightness7Icon />,
		id: mode,
		keywords: ['theme', mode],
		name: `custom.theme.${mode}`,
		perform: () => {
			setTheme(mode);
		},
		section: CommandSections.Modes,
	}));

	const languagesActions: AppAction[] = Object.values(
		LocalizationLanguages,
	).map<AppAction>(lang => {
		const { code, direction, flag, isoCode, label } = lang;

		return {
			icon: (
				<FlagImage
					iso2={flag}
					style={{
						height: theme.spacing(3),
						width: theme.spacing(3),
					}}
				/>
			),
			id: code,
			keywords: [label, code, isoCode, direction, 'languages'],
			name: `languages.${code}`,
			perform: () => {
				changeLanguage(code);
			},
			section: CommandSections.Languages,
			subtitle: ` (${code.toUpperCase()})`,
		};
	});

	const systemActions: AppAction[] = [
		{
			icon: <PowerSettingsNew />,
			id: 'logout',
			keywords: [
				'authentication',
				'logout',
				'sign',
				'out',
				translate('ra.auth.logout'),
			],
			name: 'ra.auth.logout',
			perform: () => {
				logout(null, '/').catch(Logger.error);
			},
			section: CommandSections.System,
		},
	];

	const defaultActions: Action[] = (
		[
			...priorityResources,
			...sections,
			...pages,
			...resources('list'),
			...resources('create', { keywords: ['new'] }),
			...themesActions,
			...modeActions,
			...languagesActions,
			...actions,
			...systemActions,
		] as AppAction[]
	).map(
		({
			icon,
			id,
			keywords,
			name,
			parent,
			perform,
			priority,
			section,
			shortcut,
			subtitle,
		}) => ({
			icon,
			id,
			name: translate(name),
			parent,
			perform,
			priority,
			shortcut,
			subtitle,
			...(keywords && { keywords: keywordsString(...keywords) }),
			...(section && typeof section === 'string'
				? { section: translate(`command.sections.${section}`) }
				: section),
		}),
	);

	const defaultOptions: KBarOptions = { ...options };

	return (
		<BaseKBarProvider
			actions={defaultActions}
			options={defaultOptions}
		>
			{children}
			<Actions />
		</BaseKBarProvider>
	);
};
