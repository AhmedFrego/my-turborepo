import hashIt from 'hash-it';
import { columnsHash, nameHash, structure, tableHash } from 'src/common';
import { isDevelopment } from 'src/constants';
import { FieldProps, InputProps } from 'src/types';
import { Logger } from 'src/utils';

import { parseSource } from './parseSource';
import { useResourceContext } from '../useResourceContext';

export const useValidResourceColumn = (
	props: Partial<FieldProps | InputProps>,
) => {
	const { source } = props;
	const resource = useResourceContext(props);

	if (!source) {
		if (!('children' in props && Object.keys(props).length > 0)) {
			Logger.log(props);
		}

		return;
	}

	const { resource: parsedResource, source: parsedSource } = parseSource(
		source,
		resource,
	);

	if (
		isDevelopment &&
		!structure
			.find(item => item[tableHash] === parsedResource)
			?.[columnsHash].find(item => item[nameHash] === hashIt(parsedSource))?.[
			nameHash
		]
	) {
		Logger.log(
			`${parsedSource} doesnt exist in ${parsedResource} ||| ${parsedSource}`,
			props,
		);
	}
};
