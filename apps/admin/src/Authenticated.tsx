import { Card, Container, useTheme } from '@mui/material';
import { Auth } from '@supabase/auth-ui-react';
import {
	// Import predefined theme
	ThemeSupa,
} from '@supabase/auth-ui-shared';
import React from 'react';
import { useEmployeeContext, useMode, useSupabaseClient } from 'src/hooks';

export interface AuthenticatedProps {}

export const Authenticated: React.FC<
	React.PropsWithChildren<AuthenticatedProps>
> = props => {
	const { children } = props;

	const [mode] = useMode();
	const theme = useTheme();
	const supabase = useSupabaseClient();
	const { current } = useEmployeeContext();

	if (current) return children;

	return (
		<Container
			sx={{
				alignItems: 'center',
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
				justifyContent: 'center',
			}}
		>
			<Card sx={{ p: 2, width: 400 }}>
				<Auth
					appearance={{
						theme: ThemeSupa,
						variables: {
							default: {
								colors: {
									brand: theme.palette.primary.main,
									brandAccent: theme.palette.secondary.main,
								},
							},
						},
					}}
					dark={mode === 'dark'}
					providers={[]}
					supabaseClient={supabase}
				/>
			</Card>
		</Container>
	);
};
