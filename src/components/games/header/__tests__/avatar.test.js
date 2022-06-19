import {act, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {fireEvent} from "@testing-library/dom";
import React from "react";
import Avatar from "../avatar/avatar";
import App from "../../../../App";

const userLogin = async () => {
    const userInput = screen.getByTestId('username-input');
    const passwordInput = screen.getByTestId('password-input');

    const signInBtn = screen.getByTestId('sign-in-btn');


    fireEvent.change(userInput, {target: {value: 'rebecka'}});
    fireEvent.change(passwordInput, {target: {value: 'secret'}});


    await act(() => {
        fireEvent.click(signInBtn)
    })
}

describe("Test user avatar", () => {

    beforeEach(() => render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ))

    test('Name should be Rebecka Awesome', async () => {

        userLogin().then(async () => {
            await new Promise((r) => setTimeout(r, 500));
            const name = screen.getByTestId('name');
            expect(name.textContent).toBe('Rebecka Awesome');
        })

    })

    test('Event should be Rebecka Awesome', async () => {

        userLogin().then(async () => {
            await new Promise((r) => setTimeout(r, 500));
            const name = screen.getByTestId('event');
            expect(name.textContent).toBe('Last seen gambling on Starburst.');
        })

    })

})

describe("Log Out tests", () => {

    beforeEach(() => render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ))

    test('Log out button should have the expected text', async () => {

        userLogin().then(async () => {
            await new Promise((r) => setTimeout(r, 500));
            const logOutBtn = screen.getByTestId('log-out');
            expect(logOutBtn.textContent).toBe('Log Out');
        })

    })

    test('Log out button should change the text to loading', async () => {

        userLogin().then(async () => {
            await new Promise((r) => setTimeout(r, 500));
            const logOutBtn = screen.getByTestId('log-out');

            await act(() => {
                fireEvent.click(logOutBtn)
            }).then(async () => {
                expect(logOutBtn.textContent).toBe('Loading');
            });
        })

    })

    test('Log out button should redirect to login page', async () => {

        userLogin().then(async () => {
            await new Promise((r) => setTimeout(r, 500));
            const logOutBtn = screen.getByTestId('log-out');

            await act(() => {
                fireEvent.click(logOutBtn)
            }).then(async () => {
                await new Promise((r) => setTimeout(r, 2000));
                expect(history.location.pathname).toBe('/');
            });
        })

    })

})
