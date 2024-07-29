import {
	SaveContextValue,
	useSaveContext as useRaSaveContext,
} from 'react-admin';

export const useSaveContext = <
	PropsType extends SaveContextValue = SaveContextValue,
>(
	props?: PropsType,
) => {
	return useRaSaveContext<PropsType>(props);
};
