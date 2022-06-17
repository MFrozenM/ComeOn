import {Route, Routes} from "react-router-dom";
import './App.css';
import React, {useEffect} from "react";
import Login from "./pages/login/login";
import "./lib/comeOn"
import axios from "axios";

function App() {

    useEffect(() => {
        axios.defaults.baseURL = "http://localhost:3001"
    }, [])

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="about" element={<span>bye</span>}/>
            </Routes>
        </div>
    );
}

export default App;
