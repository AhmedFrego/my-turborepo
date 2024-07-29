import React, { createContext, useCallback, useMemo } from 'react';
import { StoreKeys } from 'src/constants';
import { useStore } from 'src/hooks';
import { Route } from 'src/layout';

export interface ShortCutContextValue {
	addShortcut: (data: Route[]) => void;
	shortcuts: Route[];
}

const defaultContext: ShortCutContextValue = {
	addShortcut: () => {},
	shortcuts: [],
};

export const ShortCutContext =
	createContext<ShortCutContextValue>(defaultContext);

export interface ShortCutProviderProps {}

export const ShortCutProvider: React.FC<
	React.PropsWithChildren<ShortCutProviderProps>
> = props => {
	const { children } = props;
	const [shortcuts, setShortcuts] = useStore<Route[]>(StoreKeys.ShortCut, []);

	const addShortcut = useCallback(
		(data: Route[]) => {
			setShortcuts(data);
		},
		[setShortcuts],
	);

	const contextValue = useMemo(
		() => ({
			addShortcut,
			shortcuts,
		}),
		[addShortcut, shortcuts],
	);

	return (
		<ShortCutContext.Provider value={contextValue}>
			{children}
		</ShortCutContext.Provider>
	);
};
