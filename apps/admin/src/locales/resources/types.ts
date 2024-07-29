import { RaFormLayoutTranslationMessages } from '@react-admin/ra-form-layout';
import { RaRelationshipsTranslationMessages } from '@react-admin/ra-relationships';
import { Path } from 'dot-path-value';
import { raSupabaseEnglishMessages } from 'ra-supabase';
import {
	EntityLevel,
	Genders,
	HealthcareProviderTypes,
	HealthcareServiceTypes,
	JoinPublicTables,
	NonJoinPublicTables,
	RaEnterpriseTranslationMessages,
	RequestStatuses,
	SeparationReasons,
	Tables,
	UtilFieldsNames,
} from 'src/types';

import { customMessages } from './en/custom';
import { raMessages } from './en/ra';
import { raSupabaseMessages } from './en/supabase';

export type FullTranslations = EnumsTranslations &
	RaFormLayoutTranslationMessages &
	RaRelationshipsTranslationMessages &
	ResourcesMessages &
	typeof customMessages &
	typeof raMessages &
	typeof raSupabaseMessages;

export type TranslationsPaths = Path<FullTranslations>;

export type CustomMessages = typeof customMessages;
export type RaMessages = Pick<RaEnterpriseTranslationMessages, 'ra'>;
export type EnterpriseMessages = Omit<RaEnterpriseTranslationMessages, 'ra'>;
export type RaSupabaseMessages = typeof raSupabaseEnglishMessages;

export interface AugmentedResourcesMessages {
	resources: {
		[T in NonJoinPublicTables]: {
			fields: {
				[F in keyof Tables<T>]?: string;
			};
			helperText?: {
				[F in keyof Tables<T>]?: string;
			};
			name?: string;
			name_one?: string;
			name_other?: string;
		};
	};
}

export interface NonJoinPublicTablesResourcesMessages {
	resources: {
		[T in NonJoinPublicTables]?: {
			fields: {
				[F in Exclude<keyof Tables<T>, UtilFieldsNames>]?: string;
			};
			helperText?: {
				[F in Exclude<keyof Tables<T>, UtilFieldsNames>]?: string;
			};
			name?: string;
			name_one?: string;
			name_other?: string;
		};
	};
}

export interface JoinPublicTablesResourcesMessages {
	resources?: {
		[T in JoinPublicTables]?: {
			fields?: {
				[F in Exclude<keyof Tables<T>, UtilFieldsNames>]: string;
			};
			helperText?: {
				[F in Exclude<keyof Tables<T>, UtilFieldsNames>]?: string;
			};
			name?: string;
			name_one?: string;
			name_other?: string;
		};
	};
}

export type ResourcesMessages = JoinPublicTablesResourcesMessages &
	NonJoinPublicTablesResourcesMessages;

export type EnumsTranslations = {
	enum: {
		entity_levels: { [K in EntityLevel]: string };
		genders: { [K in Genders]: string };
		healthcare_provider_types: { [K in HealthcareProviderTypes]: string };
		healthcare_service_types: { [K in HealthcareServiceTypes]: string };
		request_statuses: { [K in RequestStatuses]: string };
		separation_reasons: { [K in SeparationReasons]: string };
	};
};
