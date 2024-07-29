import { styled } from '@mui/material';
import {
	FileInputClasses,
	ImageInput as RaImageInput,
	ImageInputProps as RaImageInputProps,
} from 'react-admin';
import { useValidResourceColumn } from 'src/hooks';

import { GridWrapper, GridWrapperProps } from './GridWrapper';
import { ImagePreview } from './ImagePreview';

export interface ImageInputProps extends RaImageInputProps, GridWrapperProps {}

export const ImageInput: React.FC<ImageInputProps> = props => {
	const { children, fullWidth = true, grid, ...rest } = props;

	useValidResourceColumn(props);

	return (
		<GridWrapper grid={grid}>
			<StyledRaImageInput
				fullWidth={fullWidth}
				variant="outlined"
				{...rest}
			>
				{children ?? <ImagePreview {...props} />}
			</StyledRaImageInput>
		</GridWrapper>
	);
};

const StyledRaImageInput = styled(RaImageInput, {
	name: 'RaImageInput',
	overridesResolver: (_, styles) => styles.root,
})(({ theme }) => ({
	[`& .${FileInputClasses.dropZone}`]: {
		border: `${theme.spacing(0.25)} dashed ${theme.palette.primary.main}`,
	},
}));
