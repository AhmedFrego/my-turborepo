export const inFilter = (field: string, items?: string[]) => {
	return {
		[`${field}@in`]: `(${items?.join(',')})`,
	};
};
