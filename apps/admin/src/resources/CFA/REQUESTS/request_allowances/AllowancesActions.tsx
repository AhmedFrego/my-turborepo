import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { useCreate } from 'src/hooks';
import { Tables } from 'src/types';
import { Logger } from 'src/utils';

import { RequestActions } from '../base_requests/RequestActions';

const Approved = () => {
	const { register } = useFormContext<Tables<'request_allowances'>>();

	return (
		<TextField
			fullWidth
			label="from"
			variant="outlined"
			{...register('suggested_amount')}
		/>
	);
};

export interface AllowancesActionsProps {}

export const AllowancesActions: React.FC<AllowancesActionsProps> = () => {
	const [create] = useCreate<'allowances'>();

	return (
		<RequestActions<'request_allowances'>
			slots={{ approved: Approved }}
			onApproved={async record => {
				const {
					allowance_type_id,
					created_by,
					id,
					owner_id,
					suggested_amount,
					title,
				} = record;

				try {
					await create('allowances', {
						data: {
							allowance_type_id,
							employee_id: created_by,
							notes: title,
							owner_id,
							request_allowances_id: id,
							suggested_amount,
						},
					});
				} catch (error) {
					Logger.error(error);
				}
			}}
		/>
	);
};
