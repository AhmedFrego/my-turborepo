import { Card } from '@mui/material';
import { forwardRef } from 'react';

export interface ChartCardProps {}

export const ChartCard = forwardRef<
	HTMLDivElement,
	React.PropsWithChildren<ChartCardProps>
>((props, ref) => {
	const { children, ...rest } = props;

	return (
		<Card
			ref={ref}
			{...rest}
		>
			{children}
		</Card>
	);
});

ChartCard.displayName = 'ChartCard';
