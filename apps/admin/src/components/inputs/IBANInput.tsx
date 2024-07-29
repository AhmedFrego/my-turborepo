import {
	friendlyFormatIBAN,
	validateIBAN,
	ValidationErrorsIBAN,
} from 'ibantools';
import { TextInput, TextInputProps } from 'src/components';
import { useValidResourceColumn } from 'src/hooks';
import { Validator } from 'src/types';
import { alwaysArray, Logger } from 'src/utils';

import { GridWrapper, GridWrapperProps } from './GridWrapper';

const ibanValidator: Validator = (value?: string) => {
	if (value) {
		const { errorCodes, valid } = validateIBAN(
			String(value).replaceAll(' ', ''),
		);

		const errors: string[] = [];

		if (!valid) {
			for (const code of errorCodes) {
				switch (code) {
					case ValidationErrorsIBAN.NoIBANProvided: {
						errors.push('No Iban Provided');
						break;
					}

					case ValidationErrorsIBAN.NoIBANCountry: {
						errors.push('No Iban Country');
						break;
					}

					case ValidationErrorsIBAN.WrongBBANLength: {
						errors.push('Wrong BBAN Length');
						break;
					}

					case ValidationErrorsIBAN.WrongBBANFormat: {
						errors.push('Wrong BBAN Format');
						break;
					}

					case ValidationErrorsIBAN.ChecksumNotNumber: {
						errors.push('Checksum Not Number');
						break;
					}

					case ValidationErrorsIBAN.WrongIBANChecksum: {
						errors.push('Wrong Iban Checksum');
						break;
					}

					case ValidationErrorsIBAN.WrongAccountBankBranchChecksum: {
						errors.push('Wrong Account Bank Branch Checksum');
						break;
					}

					case ValidationErrorsIBAN.QRIBANNotAllowed: {
						errors.push('QRIBAN Not Allowed');
						break;
					}
					default: {
						errors.push('Unknown Error');
						break;
					}
				}
			}

			if (errors.length > 0) {
				Logger.log({ errors, valid, value });

				return errors.join(' / ');
			}
		}
	}
};

export interface IBANInputProps extends TextInputProps, GridWrapperProps {}

export const IBANInput: React.FC<IBANInputProps> = props => {
	const {
		format = friendlyFormatIBAN,
		fullWidth = true,
		grid,
		validate,
		...rest
	} = props;

	useValidResourceColumn(props);

	return (
		<GridWrapper grid={grid}>
			<TextInput
				format={format}
				fullWidth={fullWidth}
				validate={[...alwaysArray(validate), ibanValidator]}
				variant="outlined"
				{...rest}
			/>
		</GridWrapper>
	);
};
