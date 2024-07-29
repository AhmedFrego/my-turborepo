import React from 'react';

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires, unicorn/prefer-module
	const whyDidYouRender = await import(
		'@welldone-software/why-did-you-render'
	).then(m => m.default);

	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	whyDidYouRender(React, {
		collapseGroups: true,
		logOnDifferentValues: true,
		trackAllPureComponents: true,
		trackHooks: true,
	});
}
