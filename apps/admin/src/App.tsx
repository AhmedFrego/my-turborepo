import { CssBaseline } from '@mui/material';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { GlobalLayout } from './GlobalLayout';
import { router } from './Router';
import {
	EmployeeProvider,
	RolesProvider,
	UserPreferencesProvider,
} from './contexts';
import { StoreContextProvider, supabase } from './providers';

const queryClient = new QueryClient();

export interface AppProps {}

export const App: React.FC<AppProps> = () => {
	return (
		<PostHogProvider client={posthog}>
			<SessionContextProvider supabaseClient={supabase}>
				<UserPreferencesProvider>
					<StoreContextProvider>
						<CssBaseline enableColorScheme />
						<QueryClientProvider client={queryClient}>
							<EmployeeProvider>
								<RolesProvider>
									<GlobalLayout>
										<RouterProvider router={router} />
									</GlobalLayout>
								</RolesProvider>
							</EmployeeProvider>
						</QueryClientProvider>
					</StoreContextProvider>
				</UserPreferencesProvider>
			</SessionContextProvider>
		</PostHogProvider>
	);
};
