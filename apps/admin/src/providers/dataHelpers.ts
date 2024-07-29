import { User } from '@supabase/supabase-js';
import { STORE_VERSION } from 'src/components';
import { Functions, Json } from 'src/types';

import { supabase } from './supabase';

export const syncPreferencesWithDatabase = async (
	preferences?: Json,
	authUser?: null | User,
) => {
	if (!authUser || !preferences) return;

	await supabase
		.from('employees')
		.update({ preferences })
		.eq('id', authUser.id);
};

export const handleStructureSubmit = async (value: Json) => {
	const { error } = await supabase
		.from('options')
		.upsert(
			{ name: 'structure', value, version: STORE_VERSION },
			{ onConflict: 'name,version' },
		);

	if (error) throw new Error(error.message);
};

export const updateStatus = async (
	config: Functions<'update_request_status'>,
) => {
	const { data, error } = await supabase.rpc('update_request_status', config);

	if (error) throw new Error(error.message);

	return data;
};

export const getStructure = async () => {
	const { data, error } = await supabase
		.from('options')
		.select()
		.eq('name', 'structure')
		.eq('version', STORE_VERSION);

	if (error) throw new Error(error.message);

	return data[0]?.value;
};
