import React from 'react';
import { Pagination as RaPagination } from 'react-admin';

export interface PaginationProps {}

export const Pagination: React.FC<PaginationProps> = props => {
	const { ...rest } = props;

	return (
		<RaPagination
			rowsPerPageOptions={[10, 25, 50, 100]}
			{...rest}
		/>
	);
};
