import React from 'react'
import ReactDOM from "react-dom";

import App from '../App'

test('App component must be rendered', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App/>, div)
})