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
        if (!map.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current!,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lng, lat],
                zoom: zoom
            });
        }; // initialize map only once
        
        console.log(mapContainer.current)
        map.current.on('move', () => {
            setLng(map.current!.getCenter().lng)
            setLat(map.current!.getCenter().lat)
            setZoom(map.current!.getZoom())
        });
        
    })

    return (
        <div>
            <div id="topDisplay">
                Latitude: {lat} | Longitude: {lng} | Zoom: {zoom}
            </div>            
            <div className='map-container' ref={mapContainer} style={{width: "100vw", height: "100vh"}}/>
        </div>
    );
}