import {
	DataProvider,
	useDataProvider as useRaDataProvider,
} from 'react-admin';

export const useDataProvider = <
	TDataProvider extends DataProvider = DataProvider,
>() => {
	return useRaDataProvider<TDataProvider>();
};
