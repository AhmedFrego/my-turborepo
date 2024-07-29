import { SupabaseAuthProvider, supabaseAuthProvider } from 'ra-supabase';
import {
	useRolesContext,
	useSupabaseClient,
	useUserPreferencesContext,
} from 'src/hooks';
import { gravatarUrl, Logger } from 'src/utils';

export const useAuthProviderInstance = (): SupabaseAuthProvider => {
	const supabase = useSupabaseClient();
	const { permissions } = useRolesContext();

	const userPreferences = useUserPreferencesContext();

	const supabaseAuthProviderObject = supabaseAuthProvider(supabase, {
		getIdentity: async user => {
			const { data: userData, error: userError } = await supabase
				.from('employees')
				.select()
				.match({ id: user.id })
				.single();

			const {
				data: { user: authUser },
				error,
			} = await supabase.auth.getUser();

			if ((!authUser || error) ?? userError) {
				throw new Error(
					error?.message ?? userError?.message ?? 'ra.auth.sign_in_error',
				);
			}

			const { full_name, username } = userData ?? {};

			const { email, id } = authUser;

			return {
				...authUser,
				...userData,
				avatar: email ? gravatarUrl(email) : undefined,
				fullName: full_name ?? username ?? id ?? email,
				id,
			};
		},
	});

	return {
		...supabaseAuthProviderObject,
		getPermissions: () => {
			return permissions?.length
				? Promise.resolve(permissions)
				: Promise.reject(new Error('Loading'));
		},
		logout: async (...args) => {
			userPreferences?.syncPreferences();

			return supabaseAuthProviderObject.logout(...args).catch(Logger.error);
		},
	};
};
