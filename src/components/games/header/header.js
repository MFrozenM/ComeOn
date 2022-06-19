import React, {useEffect} from 'react';
import classes from './header.module.css'
import {useAuth} from "../login/stores/authStore";

const Header = () => {
    const userData = useAuth((state) => state.userData)

    useEffect(()=>{
        console.log(userData);
    }, [userData])

    return (
        <div className={classes.container}>

        </div>
    );
};

export default Header;
