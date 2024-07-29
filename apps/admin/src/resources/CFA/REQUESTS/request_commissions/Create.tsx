import { NumberInput, ReferenceTypeInput, TextInput } from 'src/components';
import { Categories } from 'src/constants';

import { BaseRequestCreate } from '../base_requests/Create';

export const RequestCommissionCreate = () => {
	return (
		<BaseRequestCreate>
			<NumberInput source="suggested_amount" />
			<TextInput source="reason" />
			<ReferenceTypeInput
				category={Categories.Commissions}
				source="commission_type_id"
			/>
		</BaseRequestCreate>
	);
};
