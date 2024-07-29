import { TextInput } from 'src/components';

import { BaseRequestEditProps } from '../../base_requests/Edit';
import { RequestDelegationEdit } from '../Edit';

export const RequestExternalDelegationEdit = (props: BaseRequestEditProps) => {
	return (
		<RequestDelegationEdit {...props}>
			<TextInput source="destination" />
		</RequestDelegationEdit>
	);
};
