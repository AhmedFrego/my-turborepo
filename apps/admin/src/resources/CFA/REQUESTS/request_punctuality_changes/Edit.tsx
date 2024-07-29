import { DateInput, ReferenceInput, ReferenceTypeInput } from 'src/components';
import { Categories } from 'src/constants';

import { BaseRequestEdit } from '../base_requests/Edit';

export const RequestPunctualityChangeEdit = () => {
	return (
		<BaseRequestEdit>
			<ReferenceTypeInput
				category={Categories.Punctuates}
				source="punctuality_type_id"
			/>
			<DateInput
				grid={{ sm: 6 }}
				source="date_of_old_punctuality"
			/>
			<DateInput
				grid={{ sm: 6 }}
				source="date_of_new_punctuality"
			/>
			<ReferenceInput
				optionText="amount"
				reference="advances"
				source="advances_id"
			/>
		</BaseRequestEdit>
	);
};
