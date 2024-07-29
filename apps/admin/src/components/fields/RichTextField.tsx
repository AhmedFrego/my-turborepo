import React from 'react';
import {
	RichTextField as RaRichTextField,
	RichTextFieldProps as RaRichTextFieldProps,
} from 'react-admin';
import { useValidResourceColumn } from 'src/hooks';

export interface RichTextFieldProps extends RaRichTextFieldProps {}

export const RichTextField: React.FC<RichTextFieldProps> = props => {
	const { ...rest } = props;

	useValidResourceColumn(props);

	return <RaRichTextField {...rest} />;
};
