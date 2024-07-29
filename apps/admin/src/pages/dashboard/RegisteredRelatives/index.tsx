import FamilyRestroom from '@mui/icons-material/FamilyRestroomTwoTone';
import React, { useCallback, useEffect, useState } from 'react';
import { CardWithIcon } from 'src/components';
import {
	useCreatePath,
	useEmployeeContext,
	useSupabaseClient,
} from 'src/hooks';
import { Logger } from 'src/utils';

export interface RegisteredRelativesProps {}

export const RegisteredRelatives: React.FC<RegisteredRelativesProps> = () => {
	const { current } = useEmployeeContext();
	const createPath = useCreatePath();
	const supabase = useSupabaseClient();

	const [relativesCount, setRelativesCount] = useState<null | number>(null);

	const getRelativeCount = useCallback(async () => {
		const { count, error } = await supabase
			.from('relatives')
			.select('*', { count: 'estimated', head: true })
			.in('owner_id', [current]);

		// eslint-disable-next-line @typescript-eslint/no-throw-literal
		if (error) throw error;

		setRelativesCount(count);
	}, [current, supabase]);

	useEffect(() => {
		getRelativeCount().catch(Logger.error);
	}, [current, getRelativeCount]);

	return (
		<CardWithIcon
			color="info"
			icon={<FamilyRestroom fontSize="large" />}
			subtitle={relativesCount}
			title="custom.dashboard_cards.registered_relatives"
			to={{
				pathname: createPath({ resource: 'relatives' }),
				search: `filter={}`,
			}}
		/>
	);
};
