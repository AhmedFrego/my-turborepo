export const parseSource = (source: string, defaultResource: string) => {
	const sections = source.split('/').filter(item => item.length);

	if (sections.length > 2) {
		const lastSection = sections.at(-1);
		const dotSplit = lastSection?.split('.').filter(item => item.length);

		return {
			resource: sections.at(-2),
			source: Number(dotSplit?.length) > 0 ? dotSplit?.at(-1) : lastSection,
		};
	}

	const dotSplit = source.split('.').filter(item => item.length);

	if (dotSplit.length > 1) {
		return { resource: defaultResource, source: dotSplit.at(-1) };
	}

	const atSplit = source.split('@').filter(item => item.length);

	if (atSplit.length > 1) {
		return { resource: defaultResource, source: atSplit[0] };
	}

	return { resource: defaultResource, source };
};
