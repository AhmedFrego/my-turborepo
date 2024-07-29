import { managed_admin } from 'src/resources/helpers';

export const JoinRequestDocuments = managed_admin({
	intent: 'registration',
	name: 'join_request_documents',
});
