import { DateInput } from 'src/components';

import { VacationsActions } from './VacationsActions';
import { BaseRequestEdit } from '../base_requests/Edit';

export const RequestVacationEdit = () => {
	return (
		<BaseRequestEdit actionsComponent={<VacationsActions />}>
			<DateInput
				grid={{ sm: 6 }}
				source="from"
			/>
			<DateInput
				grid={{ sm: 6 }}
				source="to"
			/>
		</BaseRequestEdit>
	);
};
