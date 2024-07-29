import { NumberInput, ReferenceTypeInput, TextInput } from 'src/components';
import { Categories } from 'src/constants';

import { BaseRequestEdit } from '../base_requests/Edit';

export const RequestCommissionEdit = () => {
	return (
		<BaseRequestEdit>
			<NumberInput source="suggested_amount" />
			<TextInput source="reason" />
			<ReferenceTypeInput
				category={Categories.Commissions}
				source="commission_type_id"
			/>
		</BaseRequestEdit>
	);
};
