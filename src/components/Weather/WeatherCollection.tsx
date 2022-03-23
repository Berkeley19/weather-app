import * as React from 'react'
import  {useWeatherApi} from '../../api/UseWeatherApi';
import { GeographicalData } from '../../utils/interfaces'
import "./WeatherCollection.scss"

export const WeatherCollection:React.FunctionComponent<GeographicalData> = ({lat, lng}) => {
  const [openSide, setOpenSide] = React.useState<boolean>(false);
  const res = useWeatherApi({lat, lng, openSideState: [openSide, setOpenSide]});


  return (
    <>
      <button id="side__button" onClick={() => {setOpenSide(openSide => !openSide);}}>
        <svg className={`switch ${openSide ? "circleClick" : "circleNorm"}`} xmlns="http://www.w3.org/2000/svg">
          <g>
            <ellipse className="background" ry="15" rx="15" cy="15.625" cx="15.625" strokeWidth="1"/>
            <ellipse className="foreground" ry="15" rx="15" cy="15.625" cx="15.625" strokeWidth="1"/>
            <line className="line line1" x1="13" y1="15.5" x2="18.5" y2="15.5" />
            <line className="line line2" x1="13" y1="15.5" x2="18.5" y2="15.5" />
          </g>
        </svg>
      </button>
    </>  
    )
}