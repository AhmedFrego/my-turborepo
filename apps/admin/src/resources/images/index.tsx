import ImageTwoTone from '@mui/icons-material/ImageTwoTone';
import { managed_admin } from 'src/resources/helpers';

import { ImageCreate } from './Create';
import { ImageEdit } from './Edit';
import { ImageList } from './List';
import { ImageShow } from './Show';

export const Images = managed_admin({
	create: ImageCreate,
	edit: ImageEdit,
	icon: ImageTwoTone,
	list: ImageList,
	name: 'images',
	show: ImageShow,
});
