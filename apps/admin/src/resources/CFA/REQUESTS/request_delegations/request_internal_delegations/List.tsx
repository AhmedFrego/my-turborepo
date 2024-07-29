import { filters } from '../Filters';
import { RequestDelegationList } from '../List';

export const RequestInternalDelegationList = () => {
	return <RequestDelegationList filter={filters} />;
};
