import React, {useEffect, useRef, useState} from 'react';
import classes from './box.module.css'
import Form from "../form/form";
import {LoginApis} from "../../../apis/loginApis";
import {useApiPost} from "../../../hooks/useApiPost";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../stores/authStore";
import "../animations/error-animation.css";
import {CSSTransition} from "react-transition-group";

const Box = () => {
    const navigate = useNavigate()
    const firstRender = useRef(true)
    const setAuth = useAuth((state) => state.setAuth)
    const setUserData = useAuth((state) => state.setUserData)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [inputError, setInputError] = useState("");
    const {error, data, loading, postData} = useApiPost(LoginApis.Login)

    useEffect(() => {

        if (inputError !== "") {
            setInputError("")
        }


    }, [userName, password])

    useEffect(() => {
        if (data !== null && data.data.status === "success") {
            setAuth(true)
            setUserData({...data.data.player, userName: userName})
            navigate("../games");
        }
    }, [data])

    useEffect(() => {
        if (error.response) {
            // Can send the error to server for debug
            // console.log(error.response);
        }
    }, [error])

    const onEnterPressed = (e) => {
        // console.log(e.key);
        if (e.key === 'Enter') {
            onSignInClicked()
        }
    };

    const onSignInClicked = () => {
        // {username: 'rebecka', password: 'secret'}

        if (userName !== "" && password !== "") {
            postData({username: userName, password: password})
        } else {
            setInputError("Please fill the form first")
        }
    };

    return (
        <div className={classes.container}>
            <span className={classes.title}>Sign in</span>
            <Form setUserName={setUserName} userName={userName} setPassword={setPassword} password={password}/>

            <span data-testid="sign-in-btn" onClick={onSignInClicked}
                  className={classes.sign_in_btn}>{loading ? "... Loading ..." : "Sign in"}</span>

            <CSSTransition in={error !== false || inputError !== ""} timeout={200} classNames="error-animation"
                           unmountOnExit>
                <span data-testid="error-box"
                      className={classes.error}>{error.response?.data ? error.response?.data?.error : inputError === "" ? "Unknown error" : inputError}</span>
            </CSSTransition>

        </div>
    );
};

export default Box;
// json-server --watch src/mock/mock-data.json --port 3001 --middlewares src/mock/mock-api.js
