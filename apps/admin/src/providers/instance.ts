import { createClient } from '@supabase/supabase-js';
import { kebabCase } from 'change-case';
import { appName } from 'src/constants';
import { Database } from 'src/types';

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
export const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = () =>
	createClient<Database>(supabaseUrl, supabaseKey, {
		auth: {
			autoRefreshToken: true,
			detectSessionInUrl: true,
			persistSession: true,
			storageKey: kebabCase([appName, 'user auth token'].join(' ')),
		},
	});

export default supabase();
