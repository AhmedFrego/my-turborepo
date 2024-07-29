import { TextField } from 'src/components';

import { BaseRequestShow } from '../base_requests/Show';

export const RequestShow = () => {
	return (
		<BaseRequestShow>
			<TextField source="description" />
		</BaseRequestShow>
	);
};
