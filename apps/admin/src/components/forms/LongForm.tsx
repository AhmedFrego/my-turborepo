/* eslint-disable sonarjs/no-duplicate-string */
import { styled } from '@mui/material';
import { LongForm as RaLongForm } from '@react-admin/ra-enterprise';
import { LongFormProps as RaLongFormProps } from '@react-admin/ra-form-layout';
import React from 'react';
import { EditToolBar, ToolbarProps } from 'src/components';

export interface LongFormProps extends RaLongFormProps {
	toolbarProps?: ToolbarProps;
}

export const LongForm: React.FC<LongFormProps> = props => {
	const { toolbarProps, ...rest } = props;

	return (
		<Root>
			<RaLongForm
				sx={{ display: 'flex' }}
				{...rest}
				toolbar={<EditToolBar {...toolbarProps} />}
			/>
		</Root>
	);
};
export { LongFormSection } from './LongFormSection';

const PREFIX = 'RaLongForm';

const LongFormViewClasses = {
	error: `${PREFIX}-error`,
	main: `${PREFIX}-main`,
	toc: `${PREFIX}-toc`,
	toolbar: `${PREFIX}-toolbar`,
};

const Root = styled('div', {
	name: PREFIX,
	overridesResolver: (_: unknown, styles) => styles.root,
})(({ theme }) => ({
	[`& .${LongFormViewClasses.error}`]: {
		color: theme.palette.error.main,
	},
	[`& .${LongFormViewClasses.main}`]: {
		marginLeft: '0.5em !important',
		overflow: 'visible !important',
		width: '100%',
	},
	[`& .${LongFormViewClasses.toc}`]: {
		height: 'fit-content',
		maxWidth: 'fit-content',
		minWidth: 'fit-content',
		position: 'sticky !important',
		top: theme.spacing(8),
	},
	[`& .${LongFormViewClasses.toolbar}`]: {
		bottom: 0,
		position: 'sticky',
		zIndex: 2,
	},
}));
