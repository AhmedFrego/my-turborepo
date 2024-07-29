import set from 'lodash/set';
import React, {
	createContext,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { raStore } from 'src/components';
import { useSupabaseClient, useUser } from 'src/hooks';
import { syncPreferencesWithDatabase } from 'src/providers';
import { Json } from 'src/types';
import { Logger } from 'src/utils';

export interface UserPreferencesContextProps {
	preferences: Json;
	setPreferences: React.Dispatch<React.SetStateAction<Json>>;
	syncPreferences: () => void;
	updatePreferences: <T>(key: string, value: T) => void;
}

export const UserPreferencesContext =
	createContext<UserPreferencesContextProps>({
		preferences: {},
		setPreferences: () => {},
		syncPreferences: () => {},
		updatePreferences: () => {},
	});

interface UserPreferencesProviderProps {}

export const UserPreferencesProvider: React.FC<
	React.PropsWithChildren<UserPreferencesProviderProps>
> = props => {
	const { children } = props;
	const user = useUser();
	const supabase = useSupabaseClient();

	const [preferences, setPreferences] = useState<Json>({});

	const loadPreferences = useCallback(async () => {
		try {
			if (!user?.id) return;

			const { data, error } = await supabase
				.from('employees')
				.select('preferences')
				.eq('id', user.id)
				.limit(1);

			if (error) throw error;

			const preferences = data?.[0]?.preferences ?? {};

			setPreferences(previous => {
				if (JSON.stringify(previous) !== JSON.stringify(preferences)) {
					return preferences;
				}

				return previous;
			});

			return preferences;
		} catch (error) {
			Logger.error(error);
		}
	}, [supabase, user?.id]);

	useEffect(() => {
		loadPreferences()
			.then(preferences => {
				for (const [key, value] of Object.entries(preferences ?? {})) {
					if (!raStore.getItem(key)) {
						raStore.setItem(key, value);
					}
				}
			})
			.catch(Logger.error);
	}, [loadPreferences]);

	const updatePreferences = useCallback((key: string, value: unknown) => {
		setPreferences(
			previous => set((previous ?? {}) as object, key, value) as Json,
		);
	}, []);

	const syncPreferences = useCallback(async () => {
		try {
			await syncPreferencesWithDatabase(preferences, user);
		} catch (error) {
			Logger.error(error);
		}
	}, [preferences, user]);

	const value = useMemo(
		() => ({
			preferences,
			setPreferences,
			syncPreferences,
			updatePreferences,
		}),
		[preferences, syncPreferences, updatePreferences],
	);

	return (
		<UserPreferencesContext.Provider value={value}>
			{children}
		</UserPreferencesContext.Provider>
	);
};
