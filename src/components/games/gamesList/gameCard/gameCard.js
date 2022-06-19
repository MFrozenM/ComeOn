import React, {useEffect, useState} from 'react';
import classes from './gameCard.module.css'
import {importImageBasedOnUrl} from "../../../../utils/lazyImport";
import {ReactComponent as Arrow} from "../../../../assets/icons/arrow.svg";

const GameCard = ({gameData, onPlayButtonClicked}) => {
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        importImageBasedOnUrl(gameData.icon).then((value => {
            setAvatar(value)
        }))
    }, [gameData.icon])

    return (
        <div className={classes.container}>
            <img src={avatar} className={classes.game_icon} alt={"Game"}/>
            <div className={classes.game_info_wrapper}>
                <h2 className={classes.game_name}>{gameData.name}</h2>
                <span className={classes.game_description}>{gameData.description}</span>
                <span onClick={() => onPlayButtonClicked(gameData.name)} className={classes.play_btn}>

                    <span className={classes.play_text}>Play</span>

                    <Arrow className={classes.arrow_icon}/>

                </span>
            </div>
        </div>
    );
};

export default GameCard;
