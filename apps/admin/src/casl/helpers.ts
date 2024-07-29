import { RawRule as CaslPermission, SubjectType } from '@casl/ability';
import { Permission as RaPermission } from '@react-admin/ra-rbac';

const replaceAllWithStar = (
	input: SubjectType | SubjectType[],
	from: string,
	to: string = '*',
): string | string[] => {
	if (Array.isArray(input)) {
		return input.map(String).map(item => (item === from ? to : item));
	}

	return input.toString() === from ? to : input.toString();
};

export const reactAdminToCaslPermission = (
	permission: RaPermission,
): CaslPermission => {
	const { action, record, resource, type } = permission;

	return {
		action: replaceAllWithStar(action, '*', 'manage'),
		conditions: record,
		inverted: type === 'deny',
		subject: replaceAllWithStar(resource, '*', 'all'),
	};
};

export const caslToReactAdminPermission = (
	permission: CaslPermission,
): RaPermission => {
	const { action, conditions, inverted, subject } = permission;

	return {
		action: replaceAllWithStar(action, 'manage'),
		record: conditions,
		resource: replaceAllWithStar(subject, 'all'),
		type: inverted ? 'deny' : 'allow',
	};
};
