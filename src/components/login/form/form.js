import React from 'react';
import classes from './form.module.css'

const Form = ({setUserName, userName, setPassword, password}) => {
    return (
        <div className={classes.container}>
            <input placeholder="Enter your username ..." type={"text"} className={classes.input}/>
            <input placeholder="Enter your password ..." type={"password"} className={classes.input}/>
        </div>
    );
};

export default Form;
