import { SolarMenu } from '@react-admin/ra-navigation';
import React from 'react';

import { MenuItem } from './MenuItem';
import { MenuItemConfig } from './menuConfig';

export interface SubMenuProps {
	items: MenuItemConfig[];
}

export const SubMenu: React.FC<SubMenuProps> = props => {
	const { items } = props;

	return items.map(item => {
		const { reference, name = reference, subItems, ...rest } = item;

		return (
			<MenuItem
				key={name}
				dense
				name={name}
				reference={reference}
				subMenu={
					subItems ? (
						<SolarMenu.List>
							<SubMenu items={subItems} />
						</SolarMenu.List>
					) : undefined
				}
				{...rest}
			/>
		);
	});
};
