import { TextInput } from 'src/components';

import { BaseRequestCreate } from '../base_requests/Create';

export const RequestCreate = () => {
	return (
		<BaseRequestCreate>
			<TextInput source="description" />
		</BaseRequestCreate>
	);
};
