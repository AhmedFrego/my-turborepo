import { InputProps, useInput as useRaInput } from 'react-admin';

export const useInput = <ValueType>(props: InputProps<ValueType>) => {
	return useRaInput<ValueType>(props);
};
