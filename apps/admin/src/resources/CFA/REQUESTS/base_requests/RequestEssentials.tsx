import MoreHoriz from '@mui/icons-material/MoreHorizTwoTone';
import { EssentialsItem } from 'src/components';

import { RequestStatusField } from './RequestStatusField';

export interface RequestEssentialsProps {}

export const RequestEssentials: React.FC<RequestEssentialsProps> = () => {
	return (
		<EssentialsItem
			icon={MoreHoriz}
			label="resources.base_requests.fields.status"
		>
			<RequestStatusField source="status" />
		</EssentialsItem>
	);
};
