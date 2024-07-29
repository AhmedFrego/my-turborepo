import { NumberInput, ReferenceTypeInput } from 'src/components';
import { Categories } from 'src/constants';

import { AllowancesActions } from './AllowancesActions';
import { BaseRequestEdit } from '../base_requests/Edit';

export const RequestAllowanceEdit = () => {
	return (
		<BaseRequestEdit actionsComponent={<AllowancesActions />}>
			<NumberInput
				grid={{ sm: 6 }}
				source="suggested_amount"
			/>
			<ReferenceTypeInput
				category={Categories.Allowances}
				grid={{ sm: 6 }}
				source="allowance_type_id"
			/>
		</BaseRequestEdit>
	);
};
