import './style/Image.css'

function Image({name}) {
    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img className='image' src={`http://openweathermap.org/img/wn/${name}@2x.png`} />
    )
}

export default Image
