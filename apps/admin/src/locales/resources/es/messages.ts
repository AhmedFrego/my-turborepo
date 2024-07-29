import merge from 'lodash/merge';

import { customMessages } from './custom';
import { enterpriseMessages } from './enterprise';
import { enumsMessages } from './enums';
import { raMessages } from './ra';
import { resourceMessages } from './resources';
import { raSupabaseMessages } from './supabase';
import { ResourcesMessages } from '../types';

const augmentedResourceMessages = Object.fromEntries(
	Object.entries(resourceMessages).map(([key, value]) => {
		const augmentedValue = Object.fromEntries(
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			Object.entries(value).map(([resourceKey, resourceValue]) => {
				return [
					resourceKey,
					merge(resourceValue, {
						fields: {
							created_at: 'Creado en',
							created_by: 'Creado por',
							id: 'Identificación',
							owner_id: 'ID de propietario',
							updated_at: 'Actualizado en',
							updated_by: 'Actualizado por',
						},
					}),
				];
			}),
		);

		if (key === 'resource') return [key, augmentedValue];

		return [key, value];
	}),
) as ResourcesMessages;

export const spanishMessages = merge(
	merge(raMessages, augmentedResourceMessages, enterpriseMessages),
	raSupabaseMessages,
	customMessages,
	enumsMessages,
);
