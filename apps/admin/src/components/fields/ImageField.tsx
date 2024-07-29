import { Box, styled, Typography } from '@mui/material';
import get from 'lodash/get';
import React from 'react';
import {
	ImageFieldProps as RaImageFieldProps,
	sanitizeFieldRestProps,
} from 'react-admin';
import {
	useGetOne,
	useRecordContext,
	useSupabaseClient,
	useTranslate,
	useValidResourceColumn,
} from 'src/hooks';
import { Tables } from 'src/types';

export interface ImageFieldProps extends RaImageFieldProps {}

export const ImageField: React.FC<ImageFieldProps> = props => {
	const { className, emptyText, source, ...rest } = props;
	const translate = useTranslate();
	const supabase = useSupabaseClient();
	const record = useRecordContext(props);
	const imageId = get(record, source);

	const databaseImage = typeof imageId === 'string';

	const { data } = useGetOne(
		'image_storage_view' as 'images',
		{ id: String(imageId) },
		{ enabled: databaseImage },
	);

	useValidResourceColumn(props);

	const Empty = emptyText ? (
		<Typography
			className={className}
			component="span"
			variant="body2"
			{...sanitizeFieldRestProps(rest)}
		>
			{emptyText && translate(emptyText, { _: emptyText })}
		</Typography>
	) : (
		<Typography
			className={className}
			component="div"
			{...sanitizeFieldRestProps(rest)}
		/>
	);

	if (!data) return Empty;

	const { bucket_id, name } = data as unknown as Tables<'image_storage_view'>;

	if (!bucket_id || !name) return Empty;

	const {
		data: { publicUrl: sourceValue },
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	} = supabase.storage.from(bucket_id).getPublicUrl(name);

	if (!sourceValue) return Empty;

	return (
		<Root
			className={className}
			{...sanitizeFieldRestProps(rest)}
		>
			<img
				alt={String(name)}
				className={ImageFieldClasses.image}
				src={sourceValue?.toString()}
			/>
		</Root>
	);
};

const PREFIX = 'RaImageField';

const ImageFieldClasses = {
	image: `${PREFIX}-image`,
	list: `${PREFIX}-list`,
};

const Root = styled(Box, {
	name: PREFIX,
	overridesResolver: (_, styles) => styles.root,
})({
	[`& .${ImageFieldClasses.image}`]: {
		height: 100,
		margin: '0.25rem',
		objectFit: 'contain',
		width: 200,
	},
	[`& .${ImageFieldClasses.list}`]: {
		display: 'flex',
		listStyleType: 'none',
	},
});
