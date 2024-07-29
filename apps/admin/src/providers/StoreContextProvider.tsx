import React from 'react';
import {
	StoreContextProvider as RaStoreContextProvider,
	StoreContextProviderProps as RaStoreContextProviderProps,
} from 'react-admin';
import { useAugmentedStore } from 'src/components';
import { SetOptional } from 'type-fest';

export interface StoreContextProviderProps
	extends SetOptional<RaStoreContextProviderProps, 'value'> {}

export const StoreContextProvider: React.FC<
	StoreContextProviderProps
> = props => {
	const { value, ...rest } = props;
	const augmentedStore = useAugmentedStore();

	return (
		<RaStoreContextProvider
			value={value ?? augmentedStore}
			{...rest}
		/>
	);
};
