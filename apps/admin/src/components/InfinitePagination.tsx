import React, { useEffect } from 'react';
import { useInfinitePaginationContext } from 'src/hooks';

export interface InfinitePaginationProps {}

export const InfinitePagination: React.FC<InfinitePaginationProps> = () => {
	const { fetchNextPage, hasNextPage, isFetchingNextPage } =
		useInfinitePaginationContext();

	if (!fetchNextPage) {
		throw new Error(
			'InfinitePagination must be used inside an InfinitePaginationContext, usually created by <InfiniteList>. You cannot use it as child of a <List> component.',
		);
	}

	useEffect(() => {
		if (hasNextPage && !isFetchingNextPage) {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			fetchNextPage();
		}
	}, [fetchNextPage, hasNextPage, isFetchingNextPage]);

	return null;
};
