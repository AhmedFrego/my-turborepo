import {
	Create,
	NumberInput,
	ReferenceTypeInput,
	SimpleFormConfigurable,
	TextInput,
} from 'src/components';
import { Categories } from 'src/constants';

export const ExpenseCreate = () => {
	return (
		<Create>
			<SimpleFormConfigurable>
				<TextInput source="title" />
				<NumberInput source="amount" />
				<ReferenceTypeInput
					category={Categories.Expenses}
					source="expense_type_id"
				/>
			</SimpleFormConfigurable>
		</Create>
	);
};
