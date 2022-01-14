import React from 'react'

function Image({name}) {
    return (
        <img src={`http://openweathermap.org/img/wn/${name}@2x.png`} />
    )
}

export default Image
