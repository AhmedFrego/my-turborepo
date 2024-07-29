import { managed_admin } from 'src/resources/helpers';

import { OptionCreate } from './Create';
import { OptionEdit } from './Edit';
import { OptionList } from './List';
import { OptionShow } from './Show';

export const Options = managed_admin({
	create: OptionCreate,
	edit: OptionEdit,
	list: OptionList,
	name: 'options',
	show: OptionShow,
});
