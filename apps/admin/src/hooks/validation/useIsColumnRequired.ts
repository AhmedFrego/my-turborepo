import { FieldProps, InputProps } from 'src/types';
import { isColumnRequired } from 'src/utils';

import { useResourceContext } from '../useResourceContext';

export const useIsColumnRequired = (
	props: Partial<FieldProps | InputProps>,
) => {
	const { source } = props;

	const resource = useResourceContext();

	return isColumnRequired(resource, source);
};
