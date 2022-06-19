import React from 'react'
import '@testing-library/jest-dom'
import {BrowserRouter} from "react-router-dom";
import {act, render, screen} from '@testing-library/react'
import Box from "../box/box";
import {fireEvent, waitFor} from "@testing-library/dom";
import {createMemoryHistory} from "history";
import {Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "../../../utils/privateRoute";

describe("Sign in button should work as expected", () => {
    beforeEach(() => render(
        <BrowserRouter>
            <Box/>
        </BrowserRouter>
    ))

    test('Button should have Sign in text', async () => {
        const signInBtn = screen.getByTestId('sign-in-btn');
        expect(signInBtn.textContent).toBe('Sign in');
    })

    test('Button text should change to ... Loading ... after click after valid inputs', async () => {
        const userInput = screen.getByTestId('username-input');
        const passwordInput = screen.getByTestId('password-input');

        fireEvent.change(userInput, {target: {value: 'rebecka'}});
        fireEvent.change(passwordInput, {target: {value: 'Xg812cavA'}});

        const signInBtn = screen.getByTestId('sign-in-btn');
        fireEvent.click(signInBtn)
        expect(signInBtn.textContent).toBe('... Loading ...');
    })

    test('Button text should not change to ... Loading ... after click if the inputs are empty', async () => {
        const signInBtn = screen.getByTestId('sign-in-btn');
        fireEvent.click(signInBtn)
        expect(signInBtn.textContent).toBe('Sign in');
    })

})

describe("Error box should work properly", () => {
    beforeEach(() => render(
        <BrowserRouter>
            <Box/>
        </BrowserRouter>
    ))

    test('Error box should be in the document after button click on empty inputs', async () => {
        const signInBtn = screen.getByTestId('sign-in-btn');
        fireEvent.click(signInBtn)

        // wait for a delay for animation
        const errorBox = await waitFor(() => screen.getByTestId('error-box'));
        expect(errorBox).toBeInTheDocument();
    })

    test('Error box message on empty inputs', async () => {
        const signInBtn = screen.getByTestId('sign-in-btn');
        fireEvent.click(signInBtn)

        const errorBox = await waitFor(() => screen.getByTestId('error-box'));
        expect(errorBox.textContent).toBe("Please fill the form first");
    })

    // test('Error box message on wrong username or password', async () => {
    //     const userInput = screen.getByTestId('username-input');
    //     const passwordInput = screen.getByTestId('password-input');
    //
    //     fireEvent.change(userInput, {target: {value: 'rebecka'}});
    //     fireEvent.change(passwordInput, {target: {value: 'Xg812cavA'}});
    //
    //     const signInBtn = screen.getByTestId('sign-in-btn');
    //     fireEvent.click(signInBtn)
    //
    //
    //     const errorBox = await waitFor(() => screen.getByTestId('error-box'));
    //     expect(errorBox.textContent).toBe("player does not exist or wrong password");
    // })

    // Make the code below out of comment to test a network error

    // test('Error box message on server does not response', async () => {
    //     const userInput = screen.getByTestId('username-input');
    //     const passwordInput = screen.getByTestId('password-input');
    //
    //     fireEvent.change(userInput, {target: {value: 'rebecka'}});
    //     fireEvent.change(passwordInput, {target: {value: 'Xg812cavA'}});
    //
    //     const signInBtn = screen.getByTestId('sign-in-btn');
    //     fireEvent.click(signInBtn)
    //
    //
    //     const errorBox = await waitFor(() => screen.getByTestId('error-box'));
    //     expect(errorBox.textContent).toBe("Unknown error");
    // })


    test('Error box should be disappear after typing in inputs', async () => {
        const userInput = screen.getByTestId('username-input');

        const signInBtn = screen.getByTestId('sign-in-btn');
        fireEvent.click(signInBtn)

        const errorBox = await waitFor(() => screen.getByTestId('error-box'));

        // await new Promise((r) => setTimeout(r, 1000));
        await act(() => {
            fireEvent.change(userInput, {target: {value: 'R'}});
        }).then(() => {
            expect(errorBox).not.toBeInTheDocument()
        });
    })

})

describe("User Sign in testing", () => {
    const history = createMemoryHistory()

    beforeEach(() => render(
        <BrowserRouter>
            <Box/>
        </BrowserRouter>
    ))

    test('User should be logged in after correct username and password', async () => {

        const userInput = screen.getByTestId('username-input');
        const passwordInput = screen.getByTestId('password-input');

        const signInBtn = screen.getByTestId('sign-in-btn');


        fireEvent.change(userInput, {target: {value: 'rebecka'}});
        fireEvent.change(passwordInput, {target: {value: 'secrett'}});


        await act(() => {
            fireEvent.click(signInBtn)
        }).then(async () => {
            await new Promise((r) => setTimeout(r, 2000));
            expect(history.location.pathname).toBe('/');
        });
    })

    test('User should not be logged in after correct username and password', async () => {

        const userInput = screen.getByTestId('username-input');
        const passwordInput = screen.getByTestId('password-input');

        const signInBtn = screen.getByTestId('sign-in-btn');

        fireEvent.change(userInput, {target: {value: 'rebecka'}});
        fireEvent.change(passwordInput, {target: {value: 'secret'}});


        await act(() => {
            fireEvent.click(signInBtn)
        }).then(async () => {
            await new Promise((r) => setTimeout(r, 2000));
            expect(history.location.pathname).toBe('/games');
        });

    })
})
