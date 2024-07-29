import { useContext } from 'react';

import { EmployeeContext } from '../../contexts/EmployeeContext';

export const useEmployeeContext = () => {
	const context = useContext(EmployeeContext);

	if (context === undefined) {
		throw new Error(
			`useEmployeeContext must be used within a EmployeeContext.`,
		);
	}

	return context;
};
