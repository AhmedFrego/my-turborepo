import { FormHelperText, Grid, GridSize } from '@mui/material';
import React from 'react';
import { InputHelperText, InputProps, Labeled, useInput } from 'react-admin';
import ReactJson, {
	InteractionProps,
	ReactJsonViewProps,
} from 'react-json-view';
import { useValidResourceColumn } from 'src/hooks';

interface JsonInputProps extends InputProps {
	grid?: { lg?: GridSize; md?: GridSize; sm?: GridSize; xs?: GridSize };
	helperText?: string;
	jsonString?: boolean;
	label?: string;
	reactJsonOptions?: Omit<ReactJsonViewProps, 'src'>;
	source: string;
}

export const JsonInput: React.FC<JsonInputProps> = props => {
	useValidResourceColumn(props);

	const {
		field: {
			onChange,
			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			value,
		},
		fieldState: { error, isTouched },
		formState: { isSubmitted },
		isRequired,
	} = useInput(props);

	const {
		grid,
		helperText,
		jsonString = false,
		label,
		reactJsonOptions,
		source,
	} = props;

	const change = (updatedSource: object) => {
		let updatedValue: null | object | string = updatedSource;

		if (jsonString) {
			updatedValue =
				Object.keys(updatedSource).length === 0
					? null
					: JSON.stringify(updatedSource);
		}

		onChange(updatedValue);
	};

	const onEdit = (edit: InteractionProps) => {
		change(edit.updated_src);

		if (reactJsonOptions?.onEdit) {
			reactJsonOptions.onEdit(edit);
		}
	};

	const onAdd = (add: InteractionProps) => {
		change(add.updated_src);

		if (reactJsonOptions?.onAdd) {
			reactJsonOptions.onAdd(add);
		}
	};

	const onDelete = (del: InteractionProps) => {
		change(del.updated_src);

		if (reactJsonOptions?.onDelete) {
			reactJsonOptions.onDelete(del);
		}
	};

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	let newValue = value;

	if (jsonString) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
		newValue = value ? JSON.parse(value) : value;
	}

	return (
		<Grid
			item
			lg={grid?.lg}
			md={grid?.md}
			sm={grid?.sm}
			xs={grid?.xs ?? 12}
		>
			<Labeled
				isRequired={isRequired}
				label={label}
				source={source}
			>
				<ReactJson
					{...reactJsonOptions}
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
					src={newValue ?? {}}
					onAdd={reactJsonOptions?.onAdd === false ? false : onAdd}
					onDelete={reactJsonOptions?.onDelete === false ? false : onDelete}
					onEdit={reactJsonOptions?.onEdit === false ? false : onEdit}
				/>
			</Labeled>
			<FormHelperText error={(isTouched || isSubmitted) && !!error}>
				<InputHelperText
					error={error?.message}
					helperText={helperText}
					touched={isTouched || isSubmitted}
				/>
			</FormHelperText>
		</Grid>
	);
};
