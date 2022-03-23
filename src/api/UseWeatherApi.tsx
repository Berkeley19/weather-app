import * as React from 'react'
import { WeatherDisplayData, WeatherResponseData, WindResponseData, TempResponseData } from '../utils/interfaces'

export const useWeatherApi = ({lat,lng,openSideState: [openSide, setOpenSide]}: WeatherDisplayData) => {

    React.useEffect(() => {
        if(openSide){
            const fetchData = async ():Promise<any> => {
                try {
                    let result= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_MAPBOX_SECRET}&units=metric`)
                    let response = await result.json()
                    return response
                } catch (error) {
                    console.log('Error')
                }
              };
          (async () => {
            let {...response} = await fetchData()
            console.log(response)
            let weatherResponse: WeatherResponseData = response.weather[0]
            let tempResponse: TempResponseData = { feels_like: response.main.feels_like, temp: response.main.temp }
            let windResponse: WindResponseData = { wind_speed: response.wind.speed }
            console.log(windResponse)
            console.log(weatherResponse)
            console.log(tempResponse)
            
          })()
        }
       },
       [ openSide ]
    );
}