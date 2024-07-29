import { managed_admin } from 'src/resources/helpers';

import { JsonschemaValidatorCreate } from './Create';
import { JsonschemaValidatorEdit } from './Edit';
import { JsonschemaValidatorList } from './List';
import { JsonschemaValidatorShow } from './Show';

export const JsonschemaValidators = managed_admin({
	create: JsonschemaValidatorCreate,
	edit: JsonschemaValidatorEdit,
	list: JsonschemaValidatorList,
	name: 'jsonschema_validators',
	show: JsonschemaValidatorShow,
});
