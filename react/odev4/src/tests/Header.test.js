import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '../Header'

describe('Header', () => {
    beforeEach(() => {
        render(<Header/>)
    })

    test('Header component must correctly render and that is content must be Emoji Search', () => {
      const title = screen.getByText(/Emoji search/i)
      expect(title.toBeInTheDocument)
    });
    
})