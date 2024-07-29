import { useContext } from 'react';

import { HotkeysContext } from '../../contexts/HotkeysContext';

export const useHotKeyContext = () => {
	const context = useContext(HotkeysContext);

	if (context === undefined) {
		throw new Error(`useHotKeyContext must be used within a HotkeysContext.`);
	}

	return context;
};
