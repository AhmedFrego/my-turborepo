import {
	Create,
	NumberInput,
	ReferenceInput,
	ReferenceTypeInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';
import { Categories } from 'src/constants';

export const BonusCreate = () => {
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
				<TextInput
					grid={{ sm: 6 }}
					source="reason"
				/>
				<TextInput source="note" />
				<ReferenceTypeInput
					category={Categories.Bonuses}
					source="bonus_type_id"
				/>
			</SimpleFormConfigurable>
		</Create>
	);
};
