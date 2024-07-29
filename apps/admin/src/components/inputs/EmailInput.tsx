import { TextInput, TextInputProps } from 'src/components';
import { useValidResourceColumn } from 'src/hooks';

import { GridWrapper, GridWrapperProps } from './GridWrapper';

export interface EmailInputProps extends TextInputProps, GridWrapperProps {}

export const EmailInput: React.FC<EmailInputProps> = props => {
	const { fullWidth = true, grid, ...rest } = props;

	useValidResourceColumn(props);

	return (
		<GridWrapper grid={grid}>
			<TextInput
				fullWidth={fullWidth}
				type="email"
				variant="outlined"
				{...rest}
			/>
		</GridWrapper>
	);
};
