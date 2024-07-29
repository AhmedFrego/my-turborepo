import {
	useThemesContext as useRaThemesContext,
	UseThemesContextParams,
} from 'react-admin';

export const useThemesContext = (params?: UseThemesContextParams) => {
	return useRaThemesContext(params);
};
