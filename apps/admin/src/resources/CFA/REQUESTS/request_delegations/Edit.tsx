import { DateInput, TextInput } from 'src/components';

import { BaseRequestEdit, BaseRequestEditProps } from '../base_requests/Edit';

export const RequestDelegationEdit = (props: BaseRequestEditProps) => {
	return (
		<BaseRequestEdit {...props}>
			<TextInput source="reason" />
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
