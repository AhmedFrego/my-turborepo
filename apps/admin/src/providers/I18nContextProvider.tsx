import React from 'react';
import {
	I18nContextProvider as RaI18nContextProvider,
	I18nContextProviderProps as RaI18nContextProviderProps,
} from 'react-admin';

export interface I18nContextProviderProps extends RaI18nContextProviderProps {}

export const I18nContextProvider: React.FC<
	I18nContextProviderProps
> = props => {
	const { ...rest } = props;

	return <RaI18nContextProvider {...rest} />;
};
