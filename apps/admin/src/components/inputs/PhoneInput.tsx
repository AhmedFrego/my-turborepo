import 'react-international-phone/style.css';

import {
	InputAdornment,
	MenuItem,
	Select,
	TextField,
	Typography,
	useTheme,
} from '@mui/material';
import { PhoneNumberUtil } from 'google-libphonenumber';
import {
	FieldTitle,
	InputHelperText,
	sanitizeInputRestProps,
} from 'react-admin';
import {
	defaultCountries,
	FlagImage,
	parseCountry,
	usePhoneInput,
} from 'react-international-phone';
import { useInput } from 'src/components';
import { useValidResourceColumn } from 'src/hooks';
import { InputProps, Validator } from 'src/types';
import { alwaysArray, Logger } from 'src/utils';

import { GridWrapper, GridWrapperProps } from './GridWrapper';

const phoneUtil = PhoneNumberUtil.getInstance();

const isPhoneValid: Validator = (phone: string) => {
	if (!phone || phone.length === 0) return;

	try {
		const parsedPhoneNumber = phoneUtil.parseAndKeepRawInput(phone);
		const isValid = phoneUtil.isValidNumber(parsedPhoneNumber);
		const isPossible = phoneUtil.isPossibleNumberWithReason(parsedPhoneNumber);

		if (isValid) {
			return;
		}

		switch (isPossible) {
			case PhoneNumberUtil.ValidationResult.INVALID_COUNTRY_CODE: {
				return 'ra.validation.INVALID_COUNTRY_CODE';
			}
			case PhoneNumberUtil.ValidationResult.INVALID_LENGTH: {
				return 'ra.validation.INVALID_LENGTH';
			}
			case PhoneNumberUtil.ValidationResult.TOO_LONG: {
				return 'ra.validation.TOO_LONG';
			}
			case PhoneNumberUtil.ValidationResult.TOO_SHORT: {
				return 'ra.validation.TOO_SHORT';
			}
			case PhoneNumberUtil.ValidationResult.IS_POSSIBLE_LOCAL_ONLY:
			case PhoneNumberUtil.ValidationResult.IS_POSSIBLE: {
				return 'ra.validation.INVALID_PHONE_NUMBER';
			}

			default: {
				return 'Invalid Phone Number';
			}
		}
	} catch (error) {
		Logger.error(error);

		return 'ra.validation.INVALID_PHONE_NUMBER';
	}
};

interface PhoneInputProps
	extends InputProps,
		Omit<Parameters<typeof usePhoneInput>[0], keyof InputProps>,
		GridWrapperProps {}

export const PhoneInput = (props: PhoneInputProps) => {
	const {
		charAfterDialCode,
		defaultCountry = 'eg',
		defaultMask,
		disableCountryGuess,
		disableDialCodeAndPrefix,
		disableDialCodePrefill,
		disableFormatting,
		forceDialCode,
		grid,
		helperText,
		historySaveDebounceMS,
		label,
		onBlur,
		onChange,
		resource,
		source,
		validate,
		...rest
	} = props;

	useValidResourceColumn(props);
	const theme = useTheme();

	const { field, fieldState, formState, isRequired } = useInput({
		label,
		onBlur,
		onChange,
		resource,
		source,
		validate: [...alwaysArray(validate), isPhoneValid],
		...rest,
	});

	const { error, invalid, isTouched } = fieldState;
	const { isSubmitted } = formState;
	const isError = (isTouched || isSubmitted) && invalid;
	const renderHelperText = helperText !== false || isError;

	const { country, handlePhoneValueChange, inputRef, inputValue, setCountry } =
		usePhoneInput({
			charAfterDialCode,
			countries: defaultCountries,
			defaultCountry,
			defaultMask,
			disableCountryGuess,
			disableDialCodeAndPrefix,
			disableDialCodePrefill,
			disableFormatting,
			forceDialCode,
			historySaveDebounceMS,
			value: String(field.value),
		});

	return (
		<GridWrapper grid={grid}>
			<TextField
				{...sanitizeInputRestProps(rest)}
				{...field}
				fullWidth
				InputProps={{
					startAdornment: (
						<InputAdornment
							position="start"
							sx={{
								marginLeft: -1,
								marginRight: 0.4,
							}}
						>
							<Select
								MenuProps={{
									sx: {
										height: 37.5,
										left: 4.25,
										top: 1.25,
										width: 45,
									},
									transformOrigin: {
										horizontal: 'left',
										vertical: 'top',
									},
								}}
								renderValue={value => (
									<FlagImage
										iso2={value}
										style={{ display: 'flex' }}
									/>
								)}
								sx={{
									'&.Mui-focused:has(div[aria-expanded="false"])': {
										fieldset: {
											display: 'block',
										},
									},
									'.MuiSelect-select': {
										padding: 1,
										paddingRight: `${theme.spacing(4)} !important`,
									},
									fieldset: {
										display: 'none',
									},
									svg: {
										right: 0,
									},
									width: 'max-content',
								}}
								value={country.iso2}
								onChange={element => {
									setCountry(element.target.value);
								}}
							>
								{defaultCountries.map(c => {
									const { dialCode, iso2, name } = parseCountry(c);

									return (
										<MenuItem
											key={iso2}
											value={iso2}
										>
											<FlagImage
												iso2={iso2}
												style={{ marginRight: theme.spacing(1) }}
											/>
											<Typography marginRight={0.5}>{name}</Typography>
											<Typography color="gray">+{dialCode}</Typography>
										</MenuItem>
									);
								})}
							</Select>
						</InputAdornment>
					),
				}}
				error={!!error}
				helperText={
					renderHelperText ? (
						<InputHelperText
							error={error?.message}
							helperText={helperText}
							touched={isTouched || isSubmitted}
						/>
					) : null
				}
				inputRef={inputRef}
				label={
					<FieldTitle
						isRequired={isRequired}
						label={label}
						resource={resource}
						source={source}
					/>
				}
				type="tel"
				value={inputValue}
				variant="outlined"
				onChange={event => {
					field.onChange(event);
					handlePhoneValueChange(event);
				}}
			/>
		</GridWrapper>
	);
};
