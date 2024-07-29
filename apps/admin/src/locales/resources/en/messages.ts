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
							created_at: 'Created At',
							created_by: 'Created By',
							id: 'Id',
							owner_id: 'Owner',
							updated_at: 'Updated At',
							updated_by: 'Updated By',
						},
					}),
				];
			}),
		);

		if (key === 'resource') return [key, augmentedValue];

		return [key, value];
	}),
) as ResourcesMessages;

export const englishMessages = merge(
	merge(raMessages, augmentedResourceMessages, enterpriseMessages),
	raSupabaseMessages,
	customMessages,
	enumsMessages,
);
