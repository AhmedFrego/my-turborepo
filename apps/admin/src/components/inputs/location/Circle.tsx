import { GoogleMapsContext, latLngEquals } from '@vis.gl/react-google-maps';
import {
	forwardRef,
	useContext,
	useEffect,
	useImperativeHandle,
	useRef,
} from 'react';
import type { Ref } from 'react';

interface CircleEventProps {
	onCenterChanged?: (p: ReturnType<google.maps.Circle['getCenter']>) => void;
	onClick?: (event: google.maps.MapMouseEvent) => void;
	onDrag?: (event: google.maps.MapMouseEvent) => void;
	onDragEnd?: (event: google.maps.MapMouseEvent) => void;
	onDragStart?: (event: google.maps.MapMouseEvent) => void;
	onMouseOut?: (event: google.maps.MapMouseEvent) => void;
	onMouseOver?: (event: google.maps.MapMouseEvent) => void;
	onRadiusChanged?: (
		radius: ReturnType<google.maps.Circle['getRadius']>,
	) => void;
}

export type CircleProps = CircleEventProps & google.maps.CircleOptions;

export type CircleRef = Ref<google.maps.Circle | null>;

const useCircle = (props: CircleProps) => {
	const {
		center,
		onCenterChanged,
		onClick,
		onDrag,
		onDragEnd,
		onDragStart,
		onMouseOut,
		onMouseOver,
		onRadiusChanged,
		radius,
		...circleOptions
	} = props;
	// This is here to avoid triggering the useEffect below when the callbacks change (which happen if the user didn't memoize them)
	const callbacks = useRef<Record<string, (event: unknown) => void>>({});

	Object.assign(callbacks.current, {
		onCenterChanged,
		onClick,
		onDrag,
		onDragEnd,
		onDragStart,
		onMouseOut,
		onMouseOver,
		onRadiusChanged,
	});

	const circle = useRef(new google.maps.Circle()).current;

	// update circleOptions (note the dependencies aren't properly checked
	// here, we just assume that setOptions is smart enough to not waste a
	// lot of time updating values that didn't change)
	circle.setOptions(circleOptions);

	useEffect(() => {
		if (!center) return;
		if (!latLngEquals(center, circle.getCenter())) circle.setCenter(center);
	}, [center, circle]);

	useEffect(() => {
		if (radius === undefined || radius === null) return;
		if (radius !== circle.getRadius()) circle.setRadius(radius);
	}, [circle, radius]);

	const map = useContext(GoogleMapsContext)?.map;

	// create circle instance and add to the map once the map is available
	useEffect(() => {
		if (!map) {
			if (map === undefined)
				console.error('<Circle> has to be inside a Map component.');

			return;
		}

		circle.setMap(map);

		return () => {
			circle.setMap(null);
		};
	}, [circle, map]);

	// attach and re-attach event-handlers when any of the properties change
	useEffect(() => {
		if (!circle) return;

		// Add event listeners
		const gme = google.maps.event;

		for (const [eventName, eventCallback] of [
			['click', 'onClick'],
			['drag', 'onDrag'],
			['dragstart', 'onDragStart'],
			['dragend', 'onDragEnd'],
			['mouseover', 'onMouseOver'],
			['mouseout', 'onMouseOut'],
		]) {
			gme.addListener(circle, eventName, (event: google.maps.MapMouseEvent) => {
				const callback = callbacks.current[eventCallback];

				if (callback) callback(event);
			});
		}
		gme.addListener(circle, 'radius_changed', () => {
			const newRadius = circle.getRadius();

			callbacks.current.onRadiusChanged?.(newRadius);
		});
		gme.addListener(circle, 'center_changed', () => {
			const newCenter = circle.getCenter();

			callbacks.current.onCenterChanged?.(newCenter);
		});

		return () => {
			gme.clearInstanceListeners(circle);
		};
	}, [circle]);

	return circle;
};

/**
 * Component to render a Google Maps Circle on a map
 */
export const Circle = forwardRef((props: CircleProps, ref: CircleRef) => {
	const circle = useCircle(props);

	useImperativeHandle(ref, () => circle);

	return null;
});

Circle.displayName = 'Circle';
