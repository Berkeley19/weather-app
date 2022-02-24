import * as React from 'react';

interface LocationData  {
    lat: number;
    lng: number;
    zoom: number;
}


const DataDisplay: React.FunctionComponent<LocationData> = (props) => {

  const RoundNumber:number|any = (num:any) => {
    return (Math.round((num + Number.EPSILON) * 100) / 100).toFixed(2)
  }  

  return (
    <div id='topDisplay'>
      Latitude: {RoundNumber(props.lat)} | Longitude: {RoundNumber(props.lng)} | Zoom: {RoundNumber(props.zoom)}
    </div>
  );
}

export default DataDisplay
