import React from 'react';
import {
	ExportButton as RaExportButton,
	ExportButtonProps as RaExportButtonProps,
} from 'react-admin';

export interface ExportButtonProps extends RaExportButtonProps {}

export const ExportButton: React.FC<ExportButtonProps> = props => {
	const { ...rest } = props;

	return <RaExportButton {...rest} />;
};
