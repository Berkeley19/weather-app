import { Dispatch, SetStateAction } from "react";

type Dispatcher<S> = Dispatch<SetStateAction<S>>


export interface LocationData  {
    latState: [number, Dispatcher<number>];
    lngState:  [number, Dispatcher<number>];
    zoomState: [number, Dispatcher<number>];
}

export interface GeographicalData  {
    lat: number;
    lng: number;
}

export interface DisplayData extends GeographicalData {
    zoom: number;
}

export interface WeatherDisplayData extends GeographicalData {
    openSideState: [boolean, Dispatcher<boolean>];
}
export interface WeatherResponseData {
    description?: String,
    icon?: String,
    id?: number,
    main?: String,
}

export interface TempResponseData {
    feels_like: number,
    temp: number,
}

export interface WindResponseData {
    wind_speed: number
}

export interface FinalWeatherData extends WeatherResponseData, TempResponseData, WindResponseData{
    
};

