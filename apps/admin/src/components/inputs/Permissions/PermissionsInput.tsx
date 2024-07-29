/* eslint-disable i18next/no-literal-string */
/* eslint-disable sonarjs/no-duplicate-string */

import DeleteIcon from '@mui/icons-material/DeleteTwoTone';
import {
	FormControl,
	Grid,
	GridSize,
	IconButton,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from '@mui/material';
import React from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';

interface PermissionsInputProps {
	grid?: { lg?: GridSize; md?: GridSize; sm?: GridSize; xs?: GridSize };
	helperText?: string;
	label?: string;
	source?: string;
}

export const PermissionsInput: React.FC<PermissionsInputProps> = () => {
	const { control, register } = useFormContext();

	const { fields, remove } = useFieldArray({ control, name: 'permissions' });

	return fields.map((field, index) => (
		<Grid
			key={field.id}
			container
			spacing={2}
		>
			<Grid
				item
				xs={3}
			>
				<Controller
					control={control}
					name={`permissions.${index}.action`}
					render={({ field }) => (
						<FormControl fullWidth>
							<InputLabel>Action</InputLabel>
							<Select
								multiple
								{...field}
							>
								<MenuItem value="list">List</MenuItem>
								<MenuItem value="create">Create</MenuItem>
								<MenuItem value="edit">Edit</MenuItem>
								<MenuItem value="delete">Delete</MenuItem>
								<MenuItem value="export">Export</MenuItem>
								<MenuItem value="read">Read</MenuItem>
								<MenuItem value="write">Write</MenuItem>
								<MenuItem value="*">All</MenuItem>
							</Select>
						</FormControl>
					)}
				/>
			</Grid>
			<Grid
				item
				xs={3}
			>
				<TextField
					fullWidth
					label="Resource"
					{...register(`permissions.${index}.resource`)}
				/>
			</Grid>
			<Grid
				item
				xs={3}
			>
				<Controller
					control={control}
					name={`permissions.${index}.type`}
					render={({ field }) => (
						<FormControl fullWidth>
							<InputLabel>Type</InputLabel>
							<Select
								defaultValue="allow"
								{...field}
							>
								<MenuItem value="deny">Deny</MenuItem>
								<MenuItem value="allow">Allow</MenuItem>
							</Select>
						</FormControl>
					)}
				/>
			</Grid>
			<Grid
				item
				xs={3}
			>
				<IconButton onClick={() => remove(index)}>
					<DeleteIcon />
				</IconButton>
			</Grid>
		</Grid>
	));
};
