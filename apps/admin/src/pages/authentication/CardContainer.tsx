import { Box, Card, CardContent, Container } from '@mui/material';

export interface CardContainerProps {}

export const CardContainer: React.FC<
	React.PropsWithChildren<CardContainerProps>
> = props => {
	const { children } = props;

	return (
		<Container
			maxWidth="sm"
			sx={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
				justifyContent: 'center',
			}}
		>
			<Box sx={{ textAlign: 'center', width: '100%' }}>
				<Card sx={{ boxShadow: 5 }}>
					<CardContent>{children}</CardContent>
				</Card>
			</Box>
		</Container>
	);
};
