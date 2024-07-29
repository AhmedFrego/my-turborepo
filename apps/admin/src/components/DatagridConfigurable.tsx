import React from 'react';
import {
	DatagridConfigurable as RaDatagridConfigurable,
	DatagridConfigurableProps as RaDatagridConfigurableProps,
} from 'react-admin';

export interface DatagridConfigurableProps
	extends RaDatagridConfigurableProps {}

export const DatagridConfigurable: React.FC<
	DatagridConfigurableProps
> = props => {
	const { ...rest } = props;

	return <RaDatagridConfigurable {...rest} />;
};
