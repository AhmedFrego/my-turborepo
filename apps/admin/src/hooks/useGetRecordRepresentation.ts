import { useGetRecordRepresentation as useRaGetRecordRepresentation } from 'react-admin';
import { NonJoinPublicTables } from 'src/types';

export const useGetRecordRepresentation = (resource: NonJoinPublicTables) =>
	useRaGetRecordRepresentation(resource as unknown as string);
