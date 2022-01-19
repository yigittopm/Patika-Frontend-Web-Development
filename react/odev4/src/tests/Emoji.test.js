import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from '../App';

let emojis, input;

describe('Emoji functions', () => {

    beforeEach(() => {
        render(<App/>)
        input = screen.getAllByTestId('input1')
        emojis = screen.getAllByText('Click to copy emoji')
        console.log(input.values)
    })

    test('The emoji data which is shown on the screen must be equal 20', () => {
      expect(emojis.length).toEqual(20)
    });

    test('The emojis which was entered in the search bar must been correctly rendered' ,() => {
        const emojiName = 'Joy'
        const joyElement =screen.getByText(emojiName)
        userEvent.type(input,emojiName);
        expect(joyElement.toBeInDocument)
    })

    test('When the emoji is clicked,it must been copied to the clipboard',() => {
        userEvent.click(emojis[0].parentElement)
    })
    
})