import { TextInput } from 'src/components';

import { BaseRequestCreateProps } from '../../base_requests/Create';
import { RequestDelegationCreate } from '../Create';

export const RequestExternalDelegationCreate = (
	props: BaseRequestCreateProps,
) => {
	return (
		<RequestDelegationCreate {...props}>
			<TextInput source="destination" />
		</RequestDelegationCreate>
	);
};
