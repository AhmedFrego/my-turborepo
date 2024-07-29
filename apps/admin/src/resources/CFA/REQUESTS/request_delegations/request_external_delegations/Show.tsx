import { TextField } from 'src/components';

import { RequestDelegationShow } from '../Show';

export const RequestExternalDelegationShow = () => {
	return (
		<RequestDelegationShow>
			<TextField source="destination" />
		</RequestDelegationShow>
	);
};
