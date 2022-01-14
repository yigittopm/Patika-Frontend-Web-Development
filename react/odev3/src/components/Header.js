import './style/Header.css'

import React, { useEffect } from 'react'
import { useCity } from '../context/CityContext'
import { useFormik } from 'formik'
import { cities } from '../cities'

function Header() {
    const { city, setCity } = useCity()

    const changeHandler = (e) => {
        setCity(e.target.value)
    }

    return (
        <div className='header'>
            <select className='select' onChange={(e) => changeHandler(e)}>
                {
                    cities.map((city) => (
                        <option key={city.id} value={city.name}>{city.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default Header