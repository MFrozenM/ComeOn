import {act, render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import {fireEvent} from "@testing-library/dom";
import React from "react";
import App from "../../../App";

const userLogin = async () => {
    const userInput = screen.getByTestId('username-input');
    const passwordInput = screen.getByTestId('password-input');

    const signInBtn = screen.getByTestId('sign-in-btn');


    fireEvent.change(userInput, {target: {value: 'rebecka'}});
    fireEvent.change(passwordInput, {target: {value: 'secret'}});


    fireEvent.click(signInBtn)
}

describe("Test search with search input", () => {

    beforeEach(() => render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ))

    test('Search input works', async () => {
        userLogin().then(async () => {
            await new Promise((r) => setTimeout(r, 500));

            const searchInput = screen.getByTestId('search-input');
            fireEvent.change(searchInput, {target: {value: 'jack a'}});

            expect(searchInput.value).toBe('jack a');

        })

    })

    test('Items should be 2 on searching sta', async () => {

        userLogin().then(async () => {
            await new Promise((r) => setTimeout(r, 500));

            const searchInput = screen.getByTestId('search-input');
            const gamesWrapper = screen.getByTestId('games-wrapper');

            fireEvent.change(searchInput, {target: {value: 'sta'}});

            await new Promise((r) => setTimeout(r, 500));

            expect(gamesWrapper.children).toHaveLength(2)
        })

    })

    test('Items should be 1 on searching jack h', async () => {
        userLogin().then(async () => {
            await new Promise((r) => setTimeout(r, 500));

            const searchInput = screen.getByTestId('search-input');
            const gamesWrapper = screen.getByTestId('games-wrapper');

            fireEvent.change(searchInput, {target: {value: 'jack a'}});

            await new Promise((r) => setTimeout(r, 500));

            expect(gamesWrapper.children).toHaveLength(1)
        })
    })
})


describe("Test search with categories", () => {

    beforeEach(() => render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ))

    beforeEach(() => {
        userLogin().then(async () => {
            await new Promise((r) => setTimeout(r, 1500));
        })
    })

    test('Search by active category', async () => {
        userLogin().then(async () => {
            await new Promise((r) => setTimeout(r, 500));

            const category_1 = screen.getByTestId('category-1');
            const gamesWrapper = screen.getByTestId('games-wrapper');

            fireEvent.click(category_1);

            await new Promise((r) => setTimeout(r, 500));

            // Should render 3 games and 2 dividers
            expect(gamesWrapper.children).toHaveLength(5)
        })

    })

    test('active category color should change', async () => {

        userLogin().then(async () => {
            await new Promise((r) => setTimeout(r, 500));

            const category_1 = screen.getByTestId('category-1');

            fireEvent.click(category_1);
            const styles = getComputedStyle(category_1);

            expect(styles.color).toBe("rgb(141, 180, 13)");
        })

    })
})


describe("Test search by categories and search input", () => {
    beforeEach(() => render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    ))

    beforeEach(() => {
        userLogin().then(async () => {
            await new Promise((r) => setTimeout(r, 1500));
        })
    })

    test('Search by search input sta and categories id 1 (VIDEO SLOTS)', async () => {
        userLogin().then(async () => {

            await new Promise((r) => setTimeout(r, 500));
            const searchInput = screen.getByTestId('search-input');
            const gamesWrapper = screen.getByTestId('games-wrapper');
            const category_1 = screen.getByTestId('category-1');


            fireEvent.change(searchInput, {target: {value: 'sta'}});
            fireEvent.click(category_1);

            await new Promise((r) => setTimeout(r, 500));

            expect(gamesWrapper.children).toHaveLength(1)
        })


    })

    test('Search by search input sta and categories id 0 (VIDEO SLOTS)', async () => {
        userLogin().then(async () => {
            await new Promise((r) => setTimeout(r, 500));

            const searchInput = screen.getByTestId('search-input');
            const gamesWrapper = screen.getByTestId('games-wrapper');
            const category_0 = screen.getByTestId('category-0');

            fireEvent.change(searchInput, {target: {value: 'sta'}});
            fireEvent.click(category_0);

            await new Promise((r) => setTimeout(r, 500));

            // 2 games and 1 divider
            expect(gamesWrapper.children).toHaveLength(3)
        })
    })

})
