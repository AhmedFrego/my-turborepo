import get from 'lodash/get';
import React from 'react';
import { FunctionField, FunctionFieldProps } from 'src/components';
import {
	useLocale,
	useResourceContext,
	useValidResourceColumn,
} from 'src/hooks';
import { getTypeOptionLocale } from 'src/utils';
import { SetOptional } from 'type-fest';

export interface TranslatableFieldProps
	extends SetOptional<FunctionFieldProps, 'render'> {}

export const TranslatableField: React.FC<TranslatableFieldProps> = props => {
	const { label, render, source, ...rest } = props;

	const resource = useResourceContext(props);
	const { locale } = useLocale();

	useValidResourceColumn(props);

	return (
		<FunctionField
			label={label ?? `resource.${resource}.fields.${source}`}
			render={
				render ??
				(record => {
					const userLocale = getTypeOptionLocale(
						record as { id: string; name: null | Record<string, string> },
						locale,
					);

					return get(record, `${source}.${userLocale}`, '') ?? '';
				})
			}
			source={source as 'id' | 'name' | `name.${string}` | undefined}
			{...rest}
		/>
	);
};
