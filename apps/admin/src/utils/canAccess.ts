import { canAccess, UseCanAccessParams } from '@react-admin/ra-rbac';
import { usePermissions } from 'src/hooks';

export const useCanAccessFunction = () => {
	const { permissions, ...rest } = usePermissions();

	const canAccessFunction = ({
		action,
		record,
		resource,
	}: UseCanAccessParams) =>
		rest.isLoading || !permissions
			? { canAccess: false, ...rest }
			: {
					canAccess: canAccess({
						action,
						permissions,
						// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
						record,
						resource,
					}),
					...rest,
				};

	return { canAccess: canAccessFunction, ...rest };
};
