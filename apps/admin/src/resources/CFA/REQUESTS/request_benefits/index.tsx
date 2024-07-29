import { managed_admin } from 'src/resources/helpers';

import { RequestBenefitCreate } from './Create';
import { RequestBenefitEdit } from './Edit';
import { RequestBenefitList } from './List';
import { RequestBenefitShow } from './Show';

export const RequestBenefits = managed_admin({
	create: RequestBenefitCreate,
	edit: RequestBenefitEdit,
	list: RequestBenefitList,
	name: 'request_benefits',
	show: RequestBenefitShow,
});
