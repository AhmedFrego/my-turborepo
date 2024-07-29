import {
	ResourceOptions as RaResourceOptions,
	UseResourceDefinitionOptions as RaUseResourceDefinitionOptions,
	ResourceDefinition,
	useResourceDefinition as useRaResourceDefinition,
} from 'react-admin';
import { PublicTables } from 'src/types';

export interface UseResourceDefinitionOptions
	extends RaUseResourceDefinitionOptions {
	readonly resource?: PublicTables;
}

export interface ResourceOptions extends RaResourceOptions {
	filterOwner?: boolean;
}

export const useResourceDefinition = <
	OptionsType extends ResourceOptions = ResourceOptions,
>(
	props?: UseResourceDefinitionOptions,
) =>
	useRaResourceDefinition<OptionsType>(props) as {
		readonly name?: PublicTables;
	} & ResourceDefinition<OptionsType>;
