import { createBrowserRouter } from 'react-router-dom';

import { Admin } from './Admin/Admin';
import { AnonOnlyRoute } from './AnonOnlyRoute';
import { ProtectedRoute } from './ProtectedRoute';
import { AdminRoutes, AuthenticationRoutes } from './constants';
import {
	ChangePasswordForm,
	CreatePasswordForm,
	ForgotPasswordForm,
	LoginForm,
	MobileSurvey,
} from './pages';

export const router = createBrowserRouter([
	{
		element: <LoginForm />,
		path: AuthenticationRoutes.Login,
	},
	{
		element: (
			<AnonOnlyRoute>
				<ForgotPasswordForm />
			</AnonOnlyRoute>
		),
		path: AuthenticationRoutes.ForgetPassword,
	},
	{
		element: <ChangePasswordForm />,
		path: AuthenticationRoutes.ChangePassword,
	},
	{
		element: <CreatePasswordForm />,
		path: AuthenticationRoutes.CreatePassword,
	},
	{
		element: (
			<ProtectedRoute>
				<MobileSurvey />
			</ProtectedRoute>
		),
		path: AdminRoutes.MobileSurvey,
	},
	{
		element: (
			<ProtectedRoute>
				<Admin />
			</ProtectedRoute>
		),
		path: '/*',
	},
]);
