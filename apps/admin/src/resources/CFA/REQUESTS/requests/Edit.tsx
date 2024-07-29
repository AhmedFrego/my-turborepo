import { TextInput } from 'src/components';

import { BaseRequestEdit } from '../base_requests/Edit';

export const RequestEdit = () => {
	return (
		<BaseRequestEdit>
			<TextInput source="description" />
		</BaseRequestEdit>
	);
};
