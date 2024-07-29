import { ReferenceTypeField } from 'src/components';

import { BonusesActions } from './BonusesActions';
import { BaseRequestShow } from '../base_requests/Show';

export const RequestBonusShow = () => {
	return (
		<BaseRequestShow actionsComponent={<BonusesActions />}>
			<ReferenceTypeField source="bonus_type_id" />
		</BaseRequestShow>
	);
};
