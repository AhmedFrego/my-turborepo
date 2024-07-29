import {
	AuthProvider,
	useAuthProvider as useRaAuthProvider,
} from 'react-admin';

export const useAuthProvider = <
	AuthProviderType extends AuthProvider = AuthProvider,
>() => {
	return useRaAuthProvider<AuthProviderType>();
};
