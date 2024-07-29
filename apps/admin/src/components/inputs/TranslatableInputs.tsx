import { Grid } from '@mui/material';
import { TranslatableInputsProps as RaTranslatableInputsProps } from 'react-admin';
import { ErrorBoundary } from 'react-error-boundary';
import { LanguageCodeEnum } from 'src/constants';
import { useValidResourceColumn } from 'src/hooks';
import { SetOptional } from 'type-fest';

import { TextInput } from './TextInput';

export interface TranslatableInputsProps
	extends SetOptional<RaTranslatableInputsProps, 'locales'> {}

export const TranslatableInputs: React.FC<TranslatableInputsProps> = props => {
	const { locales = Object.values(LanguageCodeEnum) } = props;

	useValidResourceColumn(props);

	return (
		<ErrorBoundary FallbackComponent={() => null}>
			<Grid
				container
				spacing={2}
			>
				{locales.map(item => (
					<TextInput
						key={item}
						grid={{ sm: 4 }}
						source={`name.${item}`}
					/>
				))}
			</Grid>
		</ErrorBoundary>
	);
};
