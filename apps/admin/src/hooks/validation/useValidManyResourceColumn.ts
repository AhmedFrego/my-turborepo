import hashIt from 'hash-it';
import { columnsHash, nameHash, structure, tableHash } from 'src/common';
import {
	ReferenceManyFieldProps,
	ReferenceManyInputProps,
} from 'src/components';
import { isDevelopment } from 'src/constants';
import { Logger } from 'src/utils';

import { parseSource } from './parseSource';

export const useValidManyResourceColumn = (
	props: ReferenceManyFieldProps | ReferenceManyInputProps,
) => {
	const { reference, target } = props;

	if (!target || !reference) {
		if (!('children' in props)) {
			Logger.log(props);
		}

		return;
	}

	const { resource: parsedResource, source: parsedSource } = parseSource(
		target,
		reference,
	);

	if (
		isDevelopment &&
		!structure
			.find(item => item[tableHash] === parsedResource)
			?.[columnsHash].find(item => item[nameHash] === hashIt(parsedSource))?.[
			nameHash
		]
	) {
		Logger.log(`${target} doesnt exist in ${parsedResource}`);
	}
};
