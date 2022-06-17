import React, {useState} from 'react';
import classes from './box.module.css'
import Form from "../form/form";
import axios from "axios";
import {LoginApis} from "../../../apis/loginApis";

const Box = ({}) => {
    const [title, setTitle] = useState("Sign in");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onSignInClicked = () => {
        axios.post(LoginApis.Login, {
            username: 'rebecka',
            password: 'secret'
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    };

    return (
        <div className={classes.container}>
            <span className={classes.title}>{title}</span>
            <Form setUserName={setUserName} userName={userName}/>

            <span onClick={onSignInClicked} className={classes.sign_in_btn}>Sign In</span>
        </div>
    );
};

export default Box;
