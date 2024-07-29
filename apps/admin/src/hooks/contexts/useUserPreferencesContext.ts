import { useContext } from 'react';
import { UserPreferencesContext } from 'src/contexts';

export const useUserPreferencesContext = () => {
	const context = useContext(UserPreferencesContext);

	if (context === undefined) {
		throw new Error(
			`useUserPreferencesContext must be used within a HotkeysContext.`,
		);
	}

	return context;
};
