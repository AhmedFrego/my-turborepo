import { StorageError } from '@supabase/storage-js';

import { supabase } from './supabase';

export type UploadResponse =
	| {
			data: { fullPath: string; id: string; path: string };
			error: null;
	  }
	| { data: null; error: StorageError };

export interface ReactAdminImageObject {
	rawFile: File;
	title: string;
}

export const isReactAdminImageObject = (
	image: unknown,
): image is ReactAdminImageObject =>
	!!image && typeof image === 'object' && 'rawFile' in image;

export const uploadImage = async (
	image: ReactAdminImageObject,
	bucket_name: string,
	path?: string,
) => {
	const { rawFile, title } = image;

	const { data: storageObject, error: uploadError } = (await supabase.storage
		.from(bucket_name)
		.upload(path ?? title, rawFile)) as UploadResponse;

	if (uploadError) throw uploadError;

	// FIXME: this should be unnecessary after fixing on insert trigger
	const { error: remoteImageError } = await supabase
		.from('images')
		.insert({ id: storageObject.id })
		.select('id')
		.single();

	if (remoteImageError) throw new Error(remoteImageError?.message);

	return storageObject;
};
