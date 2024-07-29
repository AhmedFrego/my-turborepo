import { DateInput, TextInput } from 'src/components';

import {
	BaseRequestCreate,
	BaseRequestCreateProps,
} from '../base_requests/Create';

export const RequestDelegationCreate = (props: BaseRequestCreateProps) => {
	return (
		<BaseRequestCreate {...props}>
			<DateInput
				grid={{ sm: 6 }}
				source="from"
			/>
			<DateInput
				grid={{ sm: 6 }}
				source="to"
			/>
			<TextInput source="reason" />
		</BaseRequestCreate>
	);
};
