import { DateField } from 'src/components';
import { alwaysArray } from 'src/utils';

import { filters } from './Filters';
import { BaseRequestList, BaseRequestListProps } from '../base_requests/List';

export const RequestDelegationList = (props: BaseRequestListProps) => {
	const { filters: childFilters, ...rest } = props;

	return (
		<BaseRequestList
			filters={[...filters, ...alwaysArray(childFilters)]}
			{...rest}
		>
			<DateField source="from" />
			<DateField source="to" />
		</BaseRequestList>
	);
};
