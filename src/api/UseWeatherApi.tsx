import * as React from 'react'
import { WeatherDisplayData, WeatherResponseData, WindResponseData, TempResponseData, FinalWeatherData } from '../utils/interfaces'

export const useWeatherApi = ({lat,lng,openSideState: [openSide, setOpenSide]}: WeatherDisplayData) => {
    const [finalData, setFinalData] = React.useState<FinalWeatherData>();

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
            const weatherResponse: WeatherResponseData = response.weather[0]
            const tempResponse: TempResponseData = { feels_like: response.main.feels_like, temp: response.main.temp }
            const windResponse: WindResponseData = { wind_speed: response.wind.speed }
            setFinalData({...weatherResponse, ...tempResponse, ...windResponse})
            // setFinalData({...weatherResponse, ...tempResponse, ...windResponse})            
            console.log(finalData)
          })()
        }
       },
       [ openSide ]
    );
}