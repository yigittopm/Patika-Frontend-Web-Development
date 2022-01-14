import { useCity } from '../context/CityContext'
import axios from 'axios'
import { useEffect, useState } from 'react'
import DailyIcon from './DailyIcon';

function WeatherList() {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({})

    const {city} = useCity()
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY}`
 
    useEffect(() => {
        axios.get(url).then(res => setData(res.data.list))
    }, [city, url])

    return (
        <div style={{display:'flex'}}>
            {
                isLoading ? <DailyIcon data={data}/> : <h2>Loading..</h2>
            }
            
        </div>
    )
}

export default WeatherList
