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
							created_at: '创建在',
							created_by: '由...制作',
							id: 'ID',
							owner_id: '所有者ID',
							updated_at: '更新在',
							updated_by: '更新',
						},
					}),
				];
			}),
		);

		if (key === 'resource') return [key, augmentedValue];

		return [key, value];
	}),
) as ResourcesMessages;

export const chineseMessages = merge(
	merge(raMessages, augmentedResourceMessages, enterpriseMessages),
	raSupabaseMessages,
	customMessages,
	enumsMessages,
);
