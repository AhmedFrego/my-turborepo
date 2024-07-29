import { NumberField, ReferenceTypeField } from 'src/components';

import { AllowancesActions } from './AllowancesActions';
import { BaseRequestShow } from '../base_requests/Show';

export const RequestAllowanceShow = () => {
	return (
		<BaseRequestShow actionsComponent={<AllowancesActions />}>
			<NumberField source="suggested_amount" />
			<ReferenceTypeField source="allowance_type_id" />
		</BaseRequestShow>
	);
};
