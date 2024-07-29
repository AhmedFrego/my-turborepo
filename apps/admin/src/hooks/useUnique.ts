import { useUnique as useRaUnique, UseUniqueOptions } from 'react-admin';

export const useUnique = (options?: UseUniqueOptions) => {
	return useRaUnique(options);
};
