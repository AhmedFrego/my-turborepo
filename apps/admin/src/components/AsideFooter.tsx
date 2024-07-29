import { Card } from '@mui/material';

export interface AsideFooterProps {}

export const AsideFooter: React.FC<
	React.PropsWithChildren<AsideFooterProps>
> = props => {
	const { children } = props;

	return <Card sx={{ ml: 1, mt: 1, p: 1 }}>{children}</Card>;
};
