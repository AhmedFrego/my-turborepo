import {
	SearchInput as RaSearchInput,
	SearchInputProps as RaSearchInputProps,
} from 'react-admin';
import {
	TranslationsConfig,
	useTranslations,
	useValidResourceColumn,
} from 'src/hooks';

export interface SearchInputProps
	extends Omit<RaSearchInputProps, 'placeholder'> {
	placeholder?: TranslationsConfig;
}

export const SearchInput: React.FC<SearchInputProps> = props => {
	const { placeholder = 'ra.action.search', ...rest } = props;
	const translations = useTranslations();

	useValidResourceColumn(props);

	return (
		<RaSearchInput
			placeholder={placeholder && translations(placeholder)}
			variant="outlined"
			{...rest}
		/>
	);
};
