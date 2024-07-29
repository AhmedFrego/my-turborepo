import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useCreate } from 'src/hooks';
import { Tables } from 'src/types';
import { Logger } from 'src/utils';

import { RequestActions } from '../base_requests/RequestActions';

const Approved = () => {
	const { register } = useFormContext<Tables<'request_bonuses'>>();

	return <TextField {...register('title')} />;
};

export interface BonusesActionsProps {}

export const BonusesActions: React.FC<BonusesActionsProps> = () => {
	const [create] = useCreate<'bonuses'>();

	return (
		<RequestActions<'request_bonuses'>
			slots={{ approved: Approved }}
			onApproved={async record => {
				const { bonus_type_id, created_by, id, notes, owner_id, title } =
					record;

				try {
					await create('bonuses', {
						data: {
							bonus_request_id: id,
							bonus_type_id,
							employee_id: created_by,
							note: notes,
							owner_id,
							reason: title,
						},
					});
				} catch (error) {
					Logger.error(error);
				}
			}}
		/>
	);
};
