import { ReferenceTypeInput } from 'src/components';
import { Categories } from 'src/constants';

import { BaseRequestCreate } from '../base_requests/Create';

export const RequestBonusCreate = () => {
	return (
		<BaseRequestCreate>
			<ReferenceTypeInput
				category={Categories.Bonuses}
				source="bonus_type_id"
			/>
		</BaseRequestCreate>
	);
};
