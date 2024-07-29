import { structure, tableHash } from 'src/common';
import { Resource } from 'src/components';
import { AdminServices } from 'src/resources';
import { ThemeName, themes } from 'src/themes';
import { Language } from 'src/types';

import { contextual_managed_admin, Logger, ResourcesContext } from '../utils';

export const createThemes = (themeName: ThemeName) => {
	const lightThemeConfig = themes.find(
		theme => theme.name === themeName,
	)?.light;
	const darkThemeConfig = themes.find(theme => theme.name === themeName)?.dark;

	return {
		darkTheme: darkThemeConfig,
		lightTheme: lightThemeConfig,
	};
};

export const setupDocumentLocale = (locale: Language) => {
	document.documentElement.lang = locale.code;
	document.dir = locale.direction;
};

export const renderResources = (context: ResourcesContext) =>
	Object.values(AdminServices).map(props => {
		const { name } = props;

		return (
			<Resource
				key={name}
				{...contextual_managed_admin(props, context)}
			/>
		);
	});

const notImplementedTables = structure
	.filter(item => !['template'].includes(item[tableHash]))
	.filter(
		item =>
			!Object.values(AdminServices)
				.map(item => item.name)
				// @ts-ignore - pass
				.includes(item[tableHash]),
	);

const resourcesNotMemberOfDatabase = Object.values(AdminServices).filter(
	item => !structure.map(item => item[tableHash]).includes(item.name),
);

Logger.log({ notImplementedTables, resourcesNotMemberOfDatabase });
