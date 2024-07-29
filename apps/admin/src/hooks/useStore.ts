import { useStore as useRaStore } from 'react-admin';

export const useStore = <T>(key: string, defaultValue?: T) => {
	return useRaStore<T>(key, defaultValue);
};
