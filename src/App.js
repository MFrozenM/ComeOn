import {Route, Routes} from "react-router-dom";
import './App.css';
import React, {useEffect} from "react";
import Login from "./pages/login/login";
import "./lib/comeOn"

import {ProtectedRoute} from "./utils/privateRoute";
import Games from "./pages/games/games";
import Launch from "./components/games/launch/launch";



function App() {
    // const {loading, data, error} = useApiGet("http://localhost:3001/categories")

    // useEffect(() => {
    //     // console.log(loading, data, error);
    // }, [loading, data, error])

    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="games" element={<ProtectedRoute><Games/></ProtectedRoute>}/>
            </Routes>

        </div>
    );
}

export default App;
