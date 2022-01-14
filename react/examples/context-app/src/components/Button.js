import { useContext } from 'react'

import ThemeContext from '../context/ThemeContext';

function Button() {

    const {theme} = useContext(ThemeContext);

    return (
        <div>
            <h1>Button {theme}</h1>
        </div>
    )
}

export default Button
