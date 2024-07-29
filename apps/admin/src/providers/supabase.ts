import { default as supabase } from './instance';

export const getUser = async () => {
	const {
		data: { user: authUser },
		error,
	} = await supabase.auth.getUser();

	if (error) throw error;

	return authUser;
};

export { default as supabase } from './instance';
