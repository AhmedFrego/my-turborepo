import { useRedirectIfAuthenticated } from 'ra-supabase';
import React from 'react';
import { useRedirectParams } from 'src/hooks';

export interface LoginPageProps {}

export const LoginPage: React.FC<LoginPageProps> = () => {
	const redirect = useRedirectParams();

	useRedirectIfAuthenticated(redirect ?? '/');

	return null;
};
