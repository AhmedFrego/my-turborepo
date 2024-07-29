import { managed_admin } from 'src/resources/helpers';

import { EntityTypeCreate } from './Create';
import { EntityTypeEdit } from './Edit';
import { EntityTypeList } from './List';
import { EntityTypeShow } from './Show';

export const EntityTypes = managed_admin({
	create: EntityTypeCreate,
	edit: EntityTypeEdit,
	list: EntityTypeList,
	name: 'entity_types',
	show: EntityTypeShow,
});
