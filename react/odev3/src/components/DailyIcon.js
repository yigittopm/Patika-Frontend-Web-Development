import React from 'react'

import Image from './Image'

function DailyIcon({data}) {

    // const {icon, description} = data ? data[9].weather[0] : null

    return (
        <div className='daily-icon'>
            <Image name="01n"/>
        </div>
    )
}

export default DailyIcon
