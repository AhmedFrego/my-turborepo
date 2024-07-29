import React, { createContext } from 'react';
import {
	FullScreen,
	FullScreenHandle,
	useFullScreenHandle,
} from 'react-full-screen';

export const FullScreenContext = createContext<FullScreenHandle | null>(null);

export interface FullScreenProviderProps {}

export const FullScreenProvider: React.FC<
	React.PropsWithChildren<FullScreenProviderProps>
> = props => {
	const { children } = props;
	const handler = useFullScreenHandle();

	return (
		<FullScreenContext.Provider value={handler}>
			<FullScreen handle={handler}>{children}</FullScreen>
		</FullScreenContext.Provider>
	);
};
