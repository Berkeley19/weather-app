import * as React from 'react';
import { DisplayData, LocationData } from '../../utils/interfaces'
import {RoundNumber} from '../../utils/usefulUtiils'

const DataDisplay: React.FunctionComponent<DisplayData> = ({lat, lng, zoom}) => {

  return (
    <div id='topDisplay'>
      Latitude: {RoundNumber(lat)} | Longitude: {RoundNumber(lng)} | Zoom: {RoundNumber(zoom)}
    </div>
  );
}

export default DataDisplay
