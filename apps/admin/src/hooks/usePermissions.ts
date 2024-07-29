import { Permissions } from '@react-admin/ra-rbac';
import { usePermissions as useRaPermissions } from 'react-admin';

export const usePermissions = <P = Permissions, E = Error>() => {
	return useRaPermissions<P, E>();
};
