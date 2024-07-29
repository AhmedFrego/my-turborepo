import { NumberInput, ReferenceTypeInput } from 'src/components';
import { Categories } from 'src/constants';

import { BaseRequestCreate } from '../base_requests/Create';

export const RequestAllowanceCreate = () => {
	return (
		<BaseRequestCreate>
			<NumberInput
				grid={{ xs: 6 }}
				source="suggested_amount"
			/>
			<ReferenceTypeInput
				category={Categories.Allowances}
				source="allowance_type_id"
			/>
		</BaseRequestCreate>
	);
};
