import { Datagrid as RaDatagrid } from '@react-admin/ra-rbac';
import React from 'react';
import { DatagridProps as RaDatagridProps } from 'react-admin';

export interface DatagridProps extends RaDatagridProps {}

export const Datagrid: React.FC<DatagridProps> = props => {
	const { ...rest } = props;

	return <RaDatagrid {...rest} />;
};
