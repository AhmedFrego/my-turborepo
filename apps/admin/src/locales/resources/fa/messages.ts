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
							created_at: 'ایجاد شده در',
							created_by: 'خلق شده توسط',
							id: 'شناسه',
							owner_id: 'شناسه مالک',
							updated_at: 'به روز شده در',
							updated_by: 'به روز شده توسط',
						},
					}),
				];
			}),
		);

		if (key === 'resource') return [key, augmentedValue];

		return [key, value];
	}),
) as ResourcesMessages;

export const persianMessages = merge(
	merge(raMessages, augmentedResourceMessages, enterpriseMessages),
	raSupabaseMessages,
	customMessages,
	enumsMessages,
);
