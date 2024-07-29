import React from 'react';
import {
	InfiniteListControllerProps,
	InfiniteListBase as RaInfiniteListBase,
} from 'react-admin';
import { NonJoinPublicTables, Tables } from 'src/types';

export interface InfiniteListBaseProps<
	T extends NonJoinPublicTables = NonJoinPublicTables,
> extends InfiniteListControllerProps<Tables<T>> {
	resource: T;
}

export const InfiniteListBase = <
	T extends NonJoinPublicTables = NonJoinPublicTables,
>(
	props: { children: React.ReactNode } & InfiniteListBaseProps<T>,
) => {
	const { ...rest } = props;

	return <RaInfiniteListBase<Tables<T>> {...rest} />;
};
