import mapboxgl from 'mapbox-gl';
import * as React from 'react'
 
mapboxgl.accessToken = 'pk.eyJ1IjoiamFrZTM3IiwiYSI6ImNrenljMDJxYzA5MDkybnA5eDljODUxZGMifQ.u0BJ4wc7-Zq4lYTH5yGCxA';

export default function Map() {
    const mapContainer = React.useRef(null);
    const map = React.useRef<mapboxgl.Map | null>(null);
    const [lng, setLng] = React.useState(-70.9);
    const [lat, setLat] = React.useState(42.35);
    const [zoom, setZoom] = React.useState(9);

    React.useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current!,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    })

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}