import React from 'react';
import classes from './form.module.css'

const Form = ({setUserName, userName, setPassword, password}) => {

    const onEmailInputChanged = (e) => {
        setUserName(e.target.value)
    }

    const onPasswordInputChanged = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className={classes.container}>
            <input data-testid="username-input" onChange={onEmailInputChanged} value={userName} placeholder="Enter your username ..." type={"text"} className={classes.input}/>
            <input data-testid="password-input" onChange={onPasswordInputChanged} value={password} placeholder="Enter your password ..." type={"password"} className={classes.input}/>
        </div>
    );
};

export default Form;
