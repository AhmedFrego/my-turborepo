import { SolarMenu, SolarMenuItemProps } from '@react-admin/ra-navigation';
import { sentenceCase } from 'change-case';
import isObject from 'lodash/isObject';
import React from 'react';
import { removeDoubleSlashes, useBasename } from 'react-admin';
import {
	ResourceOptions,
	useCreatePath,
	useResourceDefinitions,
	useTranslate,
} from 'src/hooks';
import { TranslationsPaths } from 'src/locales';
import { NonJoinPublicTables } from 'src/types';
import { SetOptional } from 'type-fest';

export interface MenuItemProps
	extends SetOptional<SolarMenuItemProps, 'name' | 'to'> {
	label?: TranslationsPaths;
	reference?: NonJoinPublicTables;
}

export const MenuItem: React.FC<MenuItemProps> = props => {
	const { label, name, reference, to, ...rest } = props;

	const basename = useBasename();

	const translate = useTranslate();
	const createPath = useCreatePath();
	const definitions = useResourceDefinitions<ResourceOptions>();

	if (!isObject(definitions)) return null;

	const translationKey =
		label ?? (`resources.${reference}.name` as TranslationsPaths);

	const translation = translate(translationKey, { smart_count: 2 });

	const Icon = reference
		? (definitions[reference as string]?.icon as React.FC)
		: undefined;

	const Item = reference ? SolarMenu.ResourceItem : SolarMenu.Item;

	return (
		<Item
			icon={Icon ? <Icon /> : undefined}
			label={
				translation === translationKey
					? sentenceCase(String(reference))
					: translation
			}
			name={String(name ?? reference)}
			to={
				(typeof to === 'string'
					? removeDoubleSlashes(`${basename}/${to}`)
					: undefined) ??
				to ??
				(reference && {
					pathname: createPath({ resource: reference }),
					search: `filter={}`,
				})
			}
			{...rest}
		/>
	);
};
