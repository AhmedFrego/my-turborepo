import { ReactElement } from 'react';
import {
	TextInput as RaTextInput,
	TextInputProps as RaTextInputProps,
} from 'react-admin';
import {
	TranslationsConfig,
	useIsColumnRequired,
	useTranslations,
	useValidResourceColumn,
} from 'src/hooks';
import { TranslationsPaths } from 'src/locales';
import { alwaysArray } from 'src/utils';
import { required } from 'src/validation';

import { GridWrapper, GridWrapperProps } from './GridWrapper';

export interface TextInputProps
	extends Omit<RaTextInputProps, 'placeholder'>,
		GridWrapperProps {
	helperText?: false | ReactElement | TranslationsPaths;
	label?: false | ReactElement | TranslationsPaths;
	placeholder?: TranslationsConfig;
}

export const TextInput: React.FC<TextInputProps> = props => {
	const {
		fullWidth = true,
		grid,
		placeholder,
		resettable = true,
		source,
		validate,
		...rest
	} = props;

	useValidResourceColumn(props);

	const translations = useTranslations();
	const isRequired = useIsColumnRequired(props);

	return (
		<GridWrapper grid={grid}>
			<RaTextInput
				fullWidth={fullWidth}
				placeholder={placeholder && translations(placeholder)}
				resettable={resettable}
				source={source}
				validate={
					isRequired ? [required(), ...alwaysArray(validate)] : validate
				}
				variant="outlined"
				{...rest}
			/>
		</GridWrapper>
	);
};
