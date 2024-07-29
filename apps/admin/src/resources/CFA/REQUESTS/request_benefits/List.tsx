import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestBenefitList = () => {
	return <BaseRequestList filter={filters} />;
};
