import React from 'react';
import {
	TranslatableFields as RaTranslatableFields,
	TranslatableFieldsProps as RaTranslatableFieldsProps,
} from 'react-admin';
import { LanguageCodeEnum } from 'src/constants';
import { useValidResourceColumn } from 'src/hooks';
import { SetOptional } from 'type-fest';

export interface TranslatableFieldsProps
	extends SetOptional<RaTranslatableFieldsProps, 'locales'> {}

export const TranslatableFields: React.FC<TranslatableFieldsProps> = props => {
	const { locales = Object.values(LanguageCodeEnum), ...rest } = props;

	useValidResourceColumn(props);

	return (
		<RaTranslatableFields
			locales={locales}
			{...rest}
		/>
	);
};
