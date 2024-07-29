import { DateField, TextField } from 'src/components';

import { BaseRequestShow, BaseRequestShowProps } from '../base_requests/Show';

export const RequestDelegationShow = (props: BaseRequestShowProps) => {
	return (
		<BaseRequestShow {...props}>
			<TextField source="reason" />
			<DateField source="from" />
			<DateField source="to" />
		</BaseRequestShow>
	);
};
