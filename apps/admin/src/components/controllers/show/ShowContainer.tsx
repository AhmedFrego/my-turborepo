import { Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import { Labeled } from 'react-admin';

export interface ShowContainerProps {}

export const ShowContainer: React.FC<
	React.PropsWithChildren<ShowContainerProps>
> = props => {
	const { children } = props;

	return (
		<Grid
			container
			spacing={2}
		>
			{React.Children.map(children, field => {
				return React.isValidElement<{ source: string }>(field) ? (
					<Grid
						key={field.props.source}
						item
						md={6}
						xs={12}
					>
						<Card
							sx={{ alignItems: 'center', display: 'flex', height: '100%' }}
						>
							<CardContent>
								<Labeled>{field}</Labeled>
							</CardContent>
						</Card>
					</Grid>
				) : null;
			})}
		</Grid>
	);
};
