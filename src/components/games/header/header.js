import React from 'react';
import classes from './header.module.css'
import Avatar from "./avatar/avatar";
import Logout from "./logout/logout";

const Header = () => {
    return (
        <div className={classes.container}>
            <Avatar/>
            <Logout/>
        </div>
    );
};

export default Header;
