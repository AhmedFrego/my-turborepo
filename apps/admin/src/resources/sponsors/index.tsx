import { managed_admin } from 'src/resources/helpers';

import { SponsorCreate } from './Create';
import { SponsorEdit } from './Edit';
import { SponsorList } from './List';
import { SponsorShow } from './Show';

export const Sponsors = managed_admin({
	create: SponsorCreate,
	edit: SponsorEdit,
	list: SponsorList,
	name: 'sponsors',
	show: SponsorShow,
});
