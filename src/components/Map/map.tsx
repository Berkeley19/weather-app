import mapboxgl from 'mapbox-gl';
import * as React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import './Map.css';
import DataDisplay from '../Sidebars/DataDisplay';
import { LocationData } from '../../utils/interfaces'
 
mapboxgl.accessToken = 'pk.eyJ1IjoiamFrZTM3IiwiYSI6ImNrenljMDJxYzA5MDkybnA5eDljODUxZGMifQ.u0BJ4wc7-Zq4lYTH5yGCxA';

const Map: React.FunctionComponent<LocationData> = ({lngState: [lng, setLng], latState: [lat, setLat], zoomState: [zoom, setZoom]}) => {
    const mapContainer = React.useRef(null);
    const map = React.useRef<mapboxgl.Map | null>(null);
    const [changeZoom, setChangeZoom] = React.useState<boolean>(false);
    

    React.useEffect(() => {
        if (!map.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current!,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lng, lat],
                zoom: zoom,
            });
        }; // initialize map only once
        
        if(!changeZoom) {
            setChangeZoom(true)
            map.current.doubleClickZoom.disable()
        }

        map.current.on('move', () => {
            setLng(map.current!.getCenter().lng)
            setLat(map.current!.getCenter().lat)
            setZoom(map.current!.getZoom())
        });

        map.current.on('load', () => {
            map.current?.resize()
        })
        
    },[changeZoom])

    return (      
        <div id='map' ref={mapContainer} >
            <DataDisplay lat= {lat} lng={lng} zoom={zoom}/>
        </div>
        
    );
}

export default Map