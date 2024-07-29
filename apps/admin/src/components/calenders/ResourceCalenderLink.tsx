import Link from '@mui/icons-material/LinkTwoTone';
import React from 'react';
import { removeDoubleSlashes, useBasename } from 'react-admin';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components';
import { useResourceDefinition, useTranslate } from 'src/hooks';
import { resourceCalenderPath } from 'src/utils';

export interface ResourceCalenderLinkProps {}

export const ResourceCalenderLink: React.FC<ResourceCalenderLinkProps> = () => {
	const translate = useTranslate();
	const navigate = useNavigate();
	const basename = useBasename();

	const { name } = useResourceDefinition();

	return (
		<Button
			label={translate('calender.calender')}
			startIcon={<Link />}
			onClick={() =>
				navigate(
					removeDoubleSlashes(`${basename}/${resourceCalenderPath(name)}`),
				)
			}
		/>
	);
};
