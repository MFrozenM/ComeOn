import React, {useEffect} from 'react';
import classes from './launch.module.css'

const Launch = ({game, turnOff}) => {

    useEffect(() => {
        window.comeon.game.launch(game);
        window.addEventListener("popstate", onBackClicked)

        window.addEventListener("keypress", onEscPressed)

        return () => {
            window.removeEventListener("popstate", onBackClicked)
            window.removeEventListener("keypress", onEscPressed)
        }
    }, [])

    const onBackClicked = () => {
        turnOff()
    };

    const onEscPressed = (e) => {
        if(e.key === "e") {
            turnOff()
        }
    };

    return (
        <div className={classes.container}>
            <div id="game-launch"/>
            <div className={classes.guide}>
                Press E or back to exit
            </div>
        </div>
    );
};

export default Launch;
