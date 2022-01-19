import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

test('Title rendered in Document', () => {
    render(<App/>)
    const titleElement = screen.getByText(/Emoji Search/i)
    
})