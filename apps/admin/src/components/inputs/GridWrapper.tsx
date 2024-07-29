import { Grid, GridSize } from '@mui/material';
import React from 'react';

export interface GridWrapperProps {
	grid?: { lg?: GridSize; md?: GridSize; sm?: GridSize; xs?: GridSize };
}

export const GridWrapper: React.FC<
	React.PropsWithChildren<GridWrapperProps>
> = props => {
	const { children, grid = {} } = props;
	const { lg, md, sm, xs } = grid;

	return (
		<Grid
			item
			lg={lg}
			md={md}
			sm={sm}
			xs={xs ?? 12}
		>
			{children}
		</Grid>
	);
};
