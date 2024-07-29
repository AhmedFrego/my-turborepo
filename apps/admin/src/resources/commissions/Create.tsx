import {
	Create,
	NumberInput,
	ReferenceInput,
	ReferenceTypeInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';
import { Categories } from 'src/constants';

export const CommissionCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<ReferenceInput
					optionText="full_name"
					reference="employees"
					source="employee_id"
				/>
				<NumberInput
					grid={{ sm: 6 }}
					source="amount"
				/>
				<ReferenceTypeInput
					category={Categories.Commissions}
					grid={{ sm: 6 }}
					source="commission_type_id"
				/>
				<TextInput source="reason" />
				<ReferenceInput
					optionText="title"
					reference="request_commissions"
					source="commission_request_id"
				/>
				<TextInput source="note" />
			</SimpleFormConfigurable>
		</Create>
	);
};
