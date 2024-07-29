import { styled } from '@mui/material';
import { useMapsLibrary } from '@vis.gl/react-google-maps';
import React, { useEffect, useRef, useState } from 'react';

const Input = styled('input')(({ theme }) => ({
	border: `${theme.spacing(0.25)} solid ${theme.palette.divider}`,
	marginTop: theme.spacing(1.5),
	padding: theme.spacing(1.5),
}));

interface PlaceAutocompleteProps {
	onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

export const PlaceAutocomplete: React.FC<PlaceAutocompleteProps> = props => {
	const { onPlaceSelect } = props;

	const [placeAutocomplete, setPlaceAutocomplete] =
		useState<google.maps.places.Autocomplete | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);
	const places = useMapsLibrary('places');

	useEffect(() => {
		if (!places || !inputRef.current) return;

		const options: google.maps.places.AutocompleteOptions = {
			fields: ['geometry', 'name', 'formatted_address'],
		};

		setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
	}, [places]);

	useEffect(() => {
		if (!placeAutocomplete) return;

		const id = placeAutocomplete.addListener('place_changed', () => {
			onPlaceSelect(placeAutocomplete.getPlace());
		});

		return () => {
			id.remove();
		};
	}, [onPlaceSelect, placeAutocomplete]);

	return <Input ref={inputRef} />;
};
