import { useResourceContext as useRaResourceContext } from 'react-admin';
import { PublicTables } from 'src/types';

export const useResourceContext = <
	ResourceInformationType extends { resource?: PublicTables },
>(
	props?: ResourceInformationType,
) => {
	return useRaResourceContext<ResourceInformationType>(props) as PublicTables;
};
