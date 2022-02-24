import * as React from "react";
import Map from "../../components/Map/Map";
import DataDisplay from "../../components/Sidebars/DataDisplay";
import "./WeatherDisplay.css"
import { LocationData } from '../../utils/interfaces'

const WeatherDisplay: React.FunctionComponent = () =>{
  const [lng, setLng] = React.useState<number>(-70.9);
  const [lat, setLat] = React.useState<number>(42.35);
  const [zoom, setZoom] = React.useState<number>(9);



  return (
    <main id="mainApp">
      <Map lngState={[lng, setLng]} latState={[lat, setLat]} zoomState={[zoom, setZoom]}/>
      <aside id="side__panel">
        <WeatherDisplay />
      </aside>
    </main>
  )
}

export default WeatherDisplay;