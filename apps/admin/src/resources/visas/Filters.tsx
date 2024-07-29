import { ReferenceTypeInput } from 'src/components';
import { Categories } from 'src/constants';
export const filters = [
	<ReferenceTypeInput
		key="visa_type"
		alwaysOn
		category={Categories.Visas}
		source="visa_type_id"
	/>,
];
