import { TabbedForm as RaTabbedForm } from '@react-admin/ra-rbac';
import React from 'react';
import {
	TabbedFormProps as RaTabbedFormProps,
	TabbedFormTabs as RaTabbedFormTabs,
} from 'react-admin';
import { EditToolBar } from 'src/components';
import { useLocale } from 'src/hooks';

export interface TabbedFormProps extends RaTabbedFormProps {}

export const TabbedForm: React.FC<TabbedFormProps> = props => {
	const { ...rest } = props;
	const { config } = useLocale();

	return (
		<RaTabbedForm
			tabs={
				<RaTabbedFormTabs
					dir={config.direction}
					scrollButtons="auto"
					variant="scrollable"
				/>
			}
			toolbar={<EditToolBar />}
			{...rest}
		/>
	);
};

export { FormTab as TabbedFormTab } from 'react-admin';
