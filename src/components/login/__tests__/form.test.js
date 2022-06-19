import React from 'react'
import '@testing-library/jest-dom'
import {BrowserRouter} from "react-router-dom";
import {render, screen} from '@testing-library/react'
import Box from "../box/box";
import {fireEvent} from "@testing-library/dom";

describe("Form inputs should work as expected", () => {
    beforeEach(() => render(
        <BrowserRouter>
            <Box/>
        </BrowserRouter>
    ))

    test('Username input should work as expected', async () => {
        const userInput = screen.getByTestId('username-input');
        fireEvent.change(userInput, {target: {value: 'rebecka'}});
        expect(userInput.value).toBe('rebecka');
    })


    test('Password input should work as expected', async () => {
        const passwordInput = screen.getByTestId('password-input');
        fireEvent.change(passwordInput, {target: {value: 'Xg812cavA'}});
        expect(passwordInput.value).toBe('Xg812cavA');
    })

    test('Username input type should be text', async () => {
        const userInput = screen.getByTestId('username-input');
        expect(userInput.type).toBe('text');
    })

    test('Password input type should be password', async () => {
        const passwordInput = screen.getByTestId('password-input');
        expect(passwordInput.type).toBe('password');
    })
})
