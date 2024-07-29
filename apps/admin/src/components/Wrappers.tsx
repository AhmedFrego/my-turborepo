import React from 'react';

export interface WrappersProps {
	wrappers: React.FC<React.PropsWithChildren<unknown>>[];
}

export const Wrappers = (props: React.PropsWithChildren<WrappersProps>) => {
	const { children, wrappers } = props;

	// eslint-disable-next-line unicorn/no-array-reduce
	return wrappers.reduce(
		(children, wrapper) => (wrapper ? wrapper({ children }) : children),
		children,
	);
};
