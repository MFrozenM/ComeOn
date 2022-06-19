import {createMemoryHistory} from "history";
import {render, screen} from "@testing-library/react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "../privateRoute";
import React from "react";

describe("Test routes", () => {
    test("redirects unauthenticated users to SignIn", async () => {
        const history = createMemoryHistory({initialEntries: ["/games"]});
        const PrivateComponent = () => <div>Private!</div>
        const PublicComponent = () => <div>Redirected!</div>

        await render(
            <BrowserRouter>
                <Routes history={history}>
                    <Route path="/games" element={<ProtectedRoute><PrivateComponent/></ProtectedRoute>}/>
                    <Route path="/" element={<PublicComponent/>}/>
                </Routes>
            </BrowserRouter>
        );

        expect(screen.queryByText("Private!")).not.toBeInTheDocument();
        expect(screen.queryByText("Redirected!")).toBeInTheDocument();
    });
})
