import React from 'react';
import classes from './login.module.css'
import Box from "../../components/login/box/box";
import {useAuth} from "../../components/login/stores/authStore";
import {Navigate} from "react-router-dom";

const Login = () => {
    const auth = useAuth((state) => state.isAuth)

    if (auth) {
        return <Navigate to="../games"/>
    }

    return (
        <div className={classes.container}>
            <Box/>
        </div>
    );
};

export default Login;
