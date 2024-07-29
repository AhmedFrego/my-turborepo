import { DateField } from '@mui/x-date-pickers';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useCreate } from 'src/hooks';
import { Tables } from 'src/types';
import { Logger } from 'src/utils';

import { RequestActions } from '../base_requests/RequestActions';

export const Approved = () => {
	const { register } = useFormContext<Tables<'request_advances'>>();

	return (
		<>
			{/* @ts-ignore - pass */}
			<DateField {...register('date_of_payment')} />
			{/* @ts-ignore - pass */}
			<DateField {...register('date_of_receipt')} />
		</>
	);
};

export interface AdvancesActionsProps {}

export const AdvancesActions: React.FC<AdvancesActionsProps> = () => {
	const [create] = useCreate<'advances'>();

	return (
		<RequestActions<'request_advances'>
			slots={{ approved: Approved }}
			onApproved={async record => {
				const {
					advance_type_id,
					amount,
					created_by,
					date_of_payment,
					date_of_receipt,
					id,
					installments,
					owner_id,
					title,
				} = record;

				try {
					await create('advances', {
						data: {
							advance_request_id: id,
							advance_type_id,
							amount,
							date_of_payment,
							date_of_receipt,
							employee_id: created_by,
							installments,
							notes: title,
							owner_id,
						},
					});
				} catch (error) {
					Logger.error(error);
				}
			}}
		/>
	);
};
