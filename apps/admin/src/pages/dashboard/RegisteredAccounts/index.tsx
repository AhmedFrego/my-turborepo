import AccountCircle from '@mui/icons-material/AccountCircleTwoTone';
import React, { useCallback, useEffect, useState } from 'react';
import { CardWithIcon } from 'src/components';
import { useCreatePath, useSupabaseClient } from 'src/hooks';
import { Logger } from 'src/utils';

export interface RegisteredAccountsProps {}

export const RegisteredAccounts: React.FC<RegisteredAccountsProps> = () => {
	const [accountsCount, setAccountsCount] = useState<null | number>(null);
	const createPath = useCreatePath();
	const supabase = useSupabaseClient();

	const getAccountCount = useCallback(async () => {
		const { count, error } = await supabase
			.from('employees')
			.select('*', { count: 'estimated', head: true });

		// eslint-disable-next-line @typescript-eslint/no-throw-literal
		if (error) throw error;

		setAccountsCount(count);
	}, [supabase]);

	useEffect(() => {
		getAccountCount().catch(Logger.error);
	}, [getAccountCount]);

	return (
		<CardWithIcon
			color="primary"
			icon={<AccountCircle fontSize="large" />}
			subtitle={accountsCount}
			title="custom.dashboard_cards.registered_accounts"
			to={{
				pathname: createPath({ resource: 'employees' }),
				search: `filter={}`,
			}}
		/>
	);
};
