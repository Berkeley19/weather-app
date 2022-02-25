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