import { Grid } from '@mui/material';
import {
	SimpleFormConfigurable as RASimpleFormConfigurable,
	SimpleFormConfigurableProps as RASimpleFormConfigurableProps,
} from 'react-admin';
import { EditToolBar, ToolbarProps } from 'src/components';
import { useResourceContext } from 'src/hooks';

import { FormHotKeys } from './FormHotKeys';

export interface SimpleFormConfigurableProps
	extends RASimpleFormConfigurableProps {
	toolbarProps?: ToolbarProps;
}

export const SimpleFormConfigurable = (
	props: React.PropsWithChildren<SimpleFormConfigurableProps>,
) => {
	const { children, toolbarProps, ...rest } = props;
	const resource = useResourceContext();

	return (
		<RASimpleFormConfigurable
			preferenceKey={`${resource}.simple_form`}
			toolbar={<EditToolBar {...toolbarProps} />}
			{...rest}
		>
			<Grid
				container
				spacing={1}
			>
				{children}
			</Grid>
			<FormHotKeys />
		</RASimpleFormConfigurable>
	);
};
