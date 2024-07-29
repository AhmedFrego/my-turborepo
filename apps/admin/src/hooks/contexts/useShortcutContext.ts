import { useContext } from 'react';
import { ShortCutContext } from 'src/contexts';

export const useShortCutContext = () => {
	const context = useContext(ShortCutContext);

	if (context === undefined) {
		throw new Error(
			`useShortCutContext must be used within a ShortCutContext.`,
		);
	}

	return context;
};
