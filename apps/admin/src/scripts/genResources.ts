import { default as shell } from 'shelljs';

import { resources } from './resourcesConfig';
import { Resource } from './resourcesTypes';

const genResource = (item: Resource) => {
	const {
		hasCreate = true,
		hasEdit = true,
		hasShow = true,
		icon,
		intent = false,
		path,
		recordRepresentation,
		resource,
	} = item;

	const { code } = shell.exec(
		`yarn gen r resources --args ${resource} ${intent} ${recordRepresentation} ${icon} ${hasCreate} ${hasEdit} ${hasShow} ${path}`,
	);

	console.log(code === 0 ? `Generated ${resource}` : `Error with code ${code}`);
};

for (const resource of Object.keys(resources) as (keyof typeof resources)[]) {
	const config = resources[resource];

	if (config.enabled) {
		genResource({ ...config, resource } as Resource);
	}
}
