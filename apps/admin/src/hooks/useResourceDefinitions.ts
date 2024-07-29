import { useResourceDefinitions as useRaResourceDefinitions } from 'react-admin';

import { ResourceOptions } from './useResourceDefinition';

export const useResourceDefinitions = <
	OptionsType extends ResourceOptions = ResourceOptions,
>() => {
	return useRaResourceDefinitions<OptionsType>();
};
