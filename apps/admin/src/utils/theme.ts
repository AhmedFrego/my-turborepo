import createCache from '@emotion/cache';
import { kebabCase } from 'change-case';
import { DirectionEnum } from 'src/constants';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

export const createCacheInstance = (
	appName: string,
	direction: DirectionEnum,
) => {
	const key = kebabCase(`${appName}-${direction}`);

	const stylisPlugins = [prefixer];

	if (direction === DirectionEnum.rtl) stylisPlugins.push(rtlPlugin);

	return createCache({
		key,
		stylisPlugins,
	});
};
