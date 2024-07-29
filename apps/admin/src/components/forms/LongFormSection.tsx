import { Divider, Stack, styled, SxProps, Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import { FormGroupContextProvider, useTranslate } from 'react-admin';

export interface LongFormSectionProps {
	cardinality?: number;
	children: ReactNode;
	label: string;
	sx?: SxProps;
}

/**
 * Section of a form to be used as child of a `<LongForm>`.
 *
 * Renders a section title, then its children inside a MUI `<Stack>`,
 * and finally an MUI `<Divider>`.
 *
 * Requires a `label` prop and `children`.
 *
 * @example
 * import { TextInput } from 'react-admin';
 * import { LongFormSection } from '@react-admin/ra-form-layout';
 *
 * const IdentitySection = () => (
 *     <LongFormSection label="Identity">
 *         <TextInput source="first_name" />
 *     </LongFormSection>
 * );
 */
export const LongFormSection = React.forwardRef<
	HTMLElement,
	LongFormSectionProps
>(function LongFormSection({ children, label, sx }: LongFormSectionProps, ref) {
	const translate = useTranslate();

	return (
		<Root
			ref={ref}
			sx={sx}
		>
			<FormGroupContextProvider name={label}>
				<Typography
					gutterBottom
					variant="h4"
				>
					{translate(label, { _: label })}
				</Typography>
				<Stack className={RaLongFormSection.stack}>{children}</Stack>
				<Divider sx={{ mb: 4 }} />
			</FormGroupContextProvider>
		</Root>
	);
});

const PREFIX = 'RaLongFormSection';

const RaLongFormSection = {
	stack: `${PREFIX}-stack`,
};

const Root = styled('section', {
	name: PREFIX,
	overridesResolver: (_, styles) => styles.root,
})(({ theme }) => ({
	[`& .${RaLongFormSection.stack}`]: {
		marginBottom: theme.spacing(1),
		marginTop: theme.spacing(1),
		width: '100%',
	},
	width: '100%',
}));
