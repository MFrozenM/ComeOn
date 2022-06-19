import React from 'react';
import classes from './divider.module.css'

const Divider = ({marginTop, marginBottom}) => {
    return (
        <div className={classes.container} style={{marginTop: marginTop && marginTop, marginBottom: marginBottom && marginBottom}}/>
    );
};

export default Divider;
