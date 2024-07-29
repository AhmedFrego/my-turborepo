// @ts-nocheck - pass
import { Box, styled, SxProps, Typography } from '@mui/material';
import { FieldProps, ImageField, sanitizeFieldRestProps } from 'react-admin';
import {
	RaRecord,
	useGetOne,
	useRecordContext,
	useSupabaseClient,
	useTranslate,
	useValidResourceColumn,
} from 'src/hooks';

export const ImagePreview = <
	RecordType extends Record<string, unknown> = Record<string, unknown>,
>(
	props: ImageFieldProps<RecordType>,
) => {
	const { className, emptyText, ...rest } = props;
	const imageId = useRecordContext(props);
	const translate = useTranslate();
	const supabase = useSupabaseClient();

	useValidResourceColumn(props);
	const databaseImage = typeof imageId === 'string';

	const { data } = useGetOne(
		'image_storage_view',
		{
			id: String(imageId),
		},
		{ enabled: databaseImage },
	);

	if (!databaseImage) return <ImageField {...props} />;

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

	const { bucket_id, name } = data;

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
				title={String(name)}
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
		margin: 1,
		objectFit: 'contain',
		width: 200,
	},
	[`& .${ImageFieldClasses.list}`]: {
		display: 'flex',
		listStyleType: 'none',
	},
});

export interface ImageFieldProps<RecordType extends RaRecord = RaRecord>
	extends FieldProps<RecordType> {
	src?: string;
	sx?: SxProps;
	title?: string;
}
