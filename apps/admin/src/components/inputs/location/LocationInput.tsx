import { Box, Typography } from '@mui/material';
import {
	AdvancedMarker,
	APILoadingStatus,
	ControlPosition,
	isLatLngLiteral,
	Map,
	MapControl,
	MapProps,
	useApiLoadingStatus,
	useMap,
} from '@vis.gl/react-google-maps';
import cloneDeep from 'lodash/cloneDeep';
import defaults from 'lodash/defaults';
import get from 'lodash/get';
import merge from 'lodash/merge';
import { GeolocatedConfig, useGeolocated } from 'react-geolocated';
import { useInput } from 'src/components';
import { CommonInputProps } from 'src/types';
import { createLogger, Logger } from 'src/utils';

import { Circle } from './Circle';
import { PlaceAutocomplete } from './PlaceAutocomplete';

export interface LocationInputProps extends CommonInputProps {
	circleProps?: Partial<google.maps.CircleOptions>;
	geoLocationConfig?: Partial<GeolocatedConfig>;
}

export const LocationInput: React.FC<LocationInputProps> = props => {
	const {
		circleProps: { radius = 20, ...circleProps } = {},
		geoLocationConfig = {},
		...rest
	} = props;

	const mapId = 'google-map-script';

	const map = useMap();
	const status = useApiLoadingStatus();

	const { coords } = useGeolocated(
		defaults(geoLocationConfig, {
			onError: createLogger('useGeolocated onError').error,
			onSuccess: createLogger('useGeolocated onSuccess').log,
			positionOptions: {
				enableHighAccuracy: true,
			},
			userDecisionTimeout: 5000,
		}),
	);

	const currentLocation: google.maps.LatLngLiteral | undefined =
		coords?.latitude && coords.longitude
			? { lat: coords.latitude, lng: coords.longitude }
			: undefined;

	const {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		field: { onChange, value },
	} = useInput({
		...rest,
	});

	const updateValue = (newValue: unknown) => {
		if (value === '') {
			onChange(newValue);
		} else {
			onChange(cloneDeep(merge(value, newValue)));
		}
	};

	const locationValue = isLatLngLiteral(value) ? value : undefined;

	const defaultCenter: MapProps['defaultCenter'] =
		locationValue ?? currentLocation;

	if (status === APILoadingStatus.FAILED)
		return <Box>{APILoadingStatus.FAILED}</Box>;

	if (status === APILoadingStatus.LOADING || !defaultCenter)
		return (
			<Typography
				sx={{
					fontSize: 24,
					fontWeight: 'bold',
					textAlign: 'center',
					width: '100%',
				}}
			>
				Loading...
			</Typography>
		);

	return (
		<Map
			defaultCenter={defaultCenter}
			defaultZoom={15}
			mapId={mapId}
			style={{
				height: 400,
				width: '100%',
			}}
			onClick={event => {
				updateValue(event.detail.latLng);
			}}
		>
			<MapControl position={ControlPosition.TOP_CENTER}>
				<PlaceAutocomplete
					onPlaceSelect={place => {
						if (!map || !place) {
							Logger.log({ map, place });

							return;
						}

						if (place.geometry) {
							const { location, viewport } = place.geometry;

							if (viewport) map.fitBounds(viewport);
							if (location) updateValue(location.toJSON());
						}
					}}
				/>
			</MapControl>

			{locationValue ? (
				<AdvancedMarker
					draggable
					position={locationValue}
					onDragEnd={event => {
						updateValue(event.latLng?.toJSON());
					}}
				/>
			) : null}
			{locationValue && radius ? (
				<Circle
					editable
					center={locationValue}
					radius={get(locationValue, 'radius', radius)}
					{...circleProps}
					onCenterChanged={event => {
						updateValue(event?.toJSON());
					}}
					onRadiusChanged={radius => {
						updateValue({ radius });
					}}
				/>
			) : null}
		</Map>
	);
};
