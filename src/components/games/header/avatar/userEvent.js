import React from 'react';
import classes from './userEvent.module.css'

const UserEvent = ({name, event}) => {
    return (
        <div className={classes.container}>
            <span data-testid="name" className={classes.name}>{name}</span>
            <span data-testid="event" className={classes.event}>{event}</span>
        </div>
    );
};

export default UserEvent;
