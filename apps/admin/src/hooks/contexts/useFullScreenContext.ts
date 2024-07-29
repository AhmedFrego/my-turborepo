import { useContext } from 'react';
import { FullScreenContext } from 'src/contexts';

export const useFullScreenContext = () => {
	const context = useContext(FullScreenContext);

	if (context === undefined) {
		throw new Error(
			`useFullScreenContext must be used within a FullScreenContext.`,
		);
	}

	return context;
};
