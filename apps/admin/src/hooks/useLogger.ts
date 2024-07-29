import { useEffectOnce, useUpdateEffect } from 'react-use';
import { Logger } from 'src/utils';

export const useLogger = (componentName: string, ...rest: unknown[]) => {
	useEffectOnce(() => {
		Logger.log(`${componentName} mounted`, ...rest);

		return () => Logger.log(`${componentName} unmounted`);
	});

	useUpdateEffect(() => {
		Logger.log(`${componentName} updated`, ...rest);
	});
};
