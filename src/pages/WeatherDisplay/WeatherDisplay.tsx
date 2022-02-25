import * as React from "react";
import Map from "../../components/Map/Map";
import "./WeatherDisplay.scss"
import { WeatherCollection } from "../../components/Weather/WeatherCollection";

const WeatherDisplay: React.FunctionComponent = () =>{
  const [lng, setLng] = React.useState<number>(-70.9);
  const [lat, setLat] = React.useState<number>(42.35);
  const [zoom, setZoom] = React.useState<number>(9);
  const [openSide, setOpenSide] = React.useState<boolean>(false);

  return (
    <main id="main_box">
      <Map lngState={[lng, setLng]} latState={[lat, setLat]} zoomState={[zoom, setZoom]}/>
      <WeatherCollection lng={lng} lat={lat}/>
      <button id="side__button" onClick={() => {setOpenSide(openSide => !openSide)}}>
        <svg className={`switch ${openSide ? "circleNorm" : "circleClick"}`} xmlns="http://www.w3.org/2000/svg">
          <g>
            <ellipse className="background" ry="15" rx="15" cy="15.625" cx="15.625" strokeWidth="1"/>
            <ellipse className="foreground" ry="15" rx="15" cy="15.625" cx="15.625" strokeWidth="1"/>
            <line className="line line1" x1="13" y1="15.5" x2="18.5" y2="15.5" />
            <line className="line line2" x1="13" y1="15.5" x2="18.5" y2="15.5" />
          </g>
        </svg>
      </button>
    </main>
      

  )
}

export default WeatherDisplay;