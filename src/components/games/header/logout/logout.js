import React, {useEffect, useState} from 'react';
import classes from './logout.module.css'
import {useAuth} from "../../../login/stores/authStore";
import {useNavigate} from "react-router-dom";
import {useApiPost} from "../../../../hooks/useApiPost";
import {LoginApis} from "../../../../apis/loginApis";
import {ReactComponent as Arrow} from "../../../../assets/icons/arrow.svg";

const Logout = () => {
    const setAuth = useAuth((state) => state.setAuth)
    const userData = useAuth((state) => state.userData)
    const {error, loading, data, postData} = useApiPost(LoginApis.Logout)
    const navigate = useNavigate()
    const [text, setText] = useState("Log Out");

    useEffect(() => {
        if (data !== null) {
            setAuth(false)
            navigate("../login");
        }
    }, [data])

    useEffect(() => {
        if (error !== false) {
            setText("Loading")
            setTimeout(() => {
                setText("Log Out")
            }, 1500)
        }
    }, [loading])

    useEffect(() => {
        if (error !== false) {
            setText("Error")
            setTimeout(() => {
                setText("Log Out")
            }, 1500)
        }
    }, [error])

    const onLogoutClicked = () => {
        postData({username: userData.userName})
    };

    return (
        <span data-testid="log-out" onClick={onLogoutClicked} className={classes.container}>
            <span className={classes.play_text}>{text}</span>
            <Arrow className={classes.arrow_icon}/>
        </span>
    );
};

export default Logout;
