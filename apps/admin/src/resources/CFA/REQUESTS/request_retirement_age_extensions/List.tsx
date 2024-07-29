import { filters } from './Filters';
import { BaseRequestList } from '../base_requests/List';

export const RequestRetirementAgeExtensionList = () => {
	return <BaseRequestList filters={filters} />;
};
