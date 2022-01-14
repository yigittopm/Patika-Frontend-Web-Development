import './style/DailyIcon.css'

import React from 'react'
import Image from './Image'

function DailyIcon({data}) {

    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const {icon, main} = data ? data.weather[0] : null

    const dateTxt = data ? data.dt_txt : null
    const fullDate = dateTxt.split(' ')[0]
    const dayIndex = new Date(fullDate).getDay()
    const dayName = days[dayIndex]

    return (
        <div className='daily-icon'>
            <p>{dayName}</p>
            <Image name={icon}/>
            <p>{main}</p>
        </div>
    )
}

export default DailyIcon
