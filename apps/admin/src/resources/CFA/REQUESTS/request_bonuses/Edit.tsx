import { ReferenceTypeInput } from 'src/components';
import { Categories } from 'src/constants';

import { BonusesActions } from './BonusesActions';
import { BaseRequestEdit } from '../base_requests/Edit';

export const RequestBonusEdit = () => {
	return (
		<BaseRequestEdit actionsComponent={<BonusesActions />}>
			<ReferenceTypeInput
				category={Categories.Bonuses}
				source="bonus_type_id"
			/>
		</BaseRequestEdit>
	);
};
