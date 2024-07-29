import { pascalCase } from 'change-case';
import { localStorageStore, Store } from 'react-admin';
import { appName } from 'src/constants';
import { UserPreferencesContextProps } from 'src/contexts';
import { useUserPreferencesContext } from 'src/hooks';
import { Logger } from 'src/utils';

export const STORE_VERSION = '1';
export const STORE_NAME = pascalCase(appName);

export const raStore = localStorageStore(STORE_VERSION, STORE_NAME);

interface AugmentedStoreConfig extends Partial<UserPreferencesContextProps> {
	log?: boolean;
}

export const augmentedStore = (config?: AugmentedStoreConfig): Store => {
	const { log = false, updatePreferences } = config ?? {};

	return {
		getItem: <T>(key: string, defaultValue?: T) => {
			if (log)
				Logger.log(
					`Store get item ${key} with default value ${JSON.stringify(
						defaultValue,
					)}`,
				);

			return raStore.getItem<T>(key, defaultValue);
		},
		removeItem: (key: string) => {
			if (log) Logger.log(`Store remove item ${key}`);

			return raStore.removeItem(key);
		},
		removeItems: (keyPrefix: string) => {
			if (log) Logger.log(`Store remove items with prefix ${keyPrefix}`);

			return raStore.removeItems(keyPrefix);
		},
		reset: () => {
			if (log) Logger.log('Store Reset');

			return raStore.reset();
		},
		setItem: <T>(key: string, value: T) => {
			if (log) Logger.log(`Store set item ${key} to ${JSON.stringify(value)}`);

			updatePreferences?.(key, value);

			return raStore.setItem(key, value);
		},
		setup: () => {
			if (log) Logger.log('Store Setup');

			return raStore.setup();
		},
		subscribe: <T>(key: string, callback: (value: T) => void) => {
			if (log) Logger.log(`Store subscribe to ${key} changes`);

			return raStore.subscribe(key, callback);
		},
		teardown: () => {
			if (log) Logger.log('Store TearDown');

			return raStore.teardown();
		},
	};
};

export const useAugmentedStore = (config?: AugmentedStoreConfig) => {
	const userPreferences = useUserPreferencesContext();

	return augmentedStore({ log: false, ...userPreferences, ...config });
};
