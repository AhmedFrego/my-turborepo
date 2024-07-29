import { useContext } from 'react';

import { RolesContext } from '../../contexts/RolesContext';

export const useRolesContext = () => {
	const context = useContext(RolesContext);

	if (context === undefined) {
		throw new Error(`useRolesContext must be used within a RolesContext.`);
	}

	return context;
};
