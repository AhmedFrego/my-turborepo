import { DateInput, ReferenceTypeInput } from 'src/components';
import { Categories } from 'src/constants';

import { BaseRequestCreate } from '../base_requests/Create';

export const RequestVacationCreate = () => {
	return (
		<BaseRequestCreate>
			<DateInput
				grid={{ sm: 6 }}
				source="from"
			/>
			<DateInput
				grid={{ sm: 6 }}
				source="to"
			/>
			<ReferenceTypeInput
				category={Categories.Vacations}
				source="vacation_type_id"
			/>
		</BaseRequestCreate>
	);
};
