import { managed_admin } from 'src/resources/helpers';

import { RequestRetirementAgeExtensionCreate } from './Create';
import { RequestRetirementAgeExtensionEdit } from './Edit';
import { RequestRetirementAgeExtensionList } from './List';
import { RequestRetirementAgeExtensionShow } from './Show';

export const RequestRetirementAgeExtensions = managed_admin({
	create: RequestRetirementAgeExtensionCreate,
	edit: RequestRetirementAgeExtensionEdit,
	list: RequestRetirementAgeExtensionList,
	name: 'request_retirement_age_extensions',
	show: RequestRetirementAgeExtensionShow,
});
