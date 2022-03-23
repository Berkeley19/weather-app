import * as React from "react";
import Map from "../../components/Map/Map";
import { WeatherCollection } from "../../components/Weather/WeatherCollection";
import "./WeatherDisplay.scss"

const WeatherDisplay: React.FunctionComponent = () =>{
  const [lng, setLng] = React.useState<number>(-70.9);
  const [lat, setLat] = React.useState<number>(42.35);
  const [zoom, setZoom] = React.useState<number>(9);

  return (
    <main id="main_box">
      <Map lngState={[lng, setLng]} latState={[lat, setLat]} zoomState={[zoom, setZoom]}/>
      <WeatherCollection lng={lng} lat={lat}/>
      
    </main>
      

  )
}

export default WeatherDisplay;