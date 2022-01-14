import './style/WeatherList.css'

import { useCity } from '../context/CityContext'
import axios from 'axios'
import { useEffect, useState } from 'react'
import DailyIcon from './DailyIcon';

function WeatherList() {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({})

    const KEY = process.env.KEY;
    const {city} = useCity()
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${KEY}`
 
    useEffect(() => {
        axios.get(url)
            .then(res => setData(res.data.list))
            .finally(() => setIsLoading(true))

    }, [city, url])

    console.log(data)

    return (
        <div className='list'>
            {
                isLoading ? (
                    <>
                        <DailyIcon data={data[0]}/>
                        <DailyIcon data={data[8]}/>
                        <DailyIcon data={data[17]}/>
                        <DailyIcon data={data[24]}/>
                        <DailyIcon data={data[35]}/>
                    </>
                ) : <h2>Loading..</h2>
            }
        </div>
    )
}

export default WeatherList
