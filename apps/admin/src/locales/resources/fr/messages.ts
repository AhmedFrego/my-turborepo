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
							created_at: 'Créé à',
							created_by: 'Créé par',
							id: 'Identifiant',
							owner_id: 'ID du propriétaire',
							updated_at: 'Mis à jour à',
							updated_by: 'Mis à jour par',
						},
					}),
				];
			}),
		);

		if (key === 'resource') return [key, augmentedValue];

		return [key, value];
	}),
) as ResourcesMessages;

export const frenchMessages = merge(
	merge(raMessages, augmentedResourceMessages, enterpriseMessages),
	raSupabaseMessages,
	customMessages,
	enumsMessages,
);
