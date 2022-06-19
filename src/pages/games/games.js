import React, {useState} from 'react';
import classes from "./games.module.css";
import Header from "../../components/games/header/header";
import GamesList from "../../components/games/gamesList/gamesList";
import Categories from "../../components/games/catregories/categories";
import Launch from "../../components/games/launch/launch";
import {useNavigate} from "react-router-dom";
import {CSSTransition} from "react-transition-group";
import "../../components/games/animations/launch-animation.css"

const games = {
    "Starburst": "starburst",
    "Jack Hammer": "jackhammer",
    "Jack and the Beanstalk": "jackandbeanstalk",
    "Dead or Alive": "deadoralive",
    "Twin Spin": "twinspin"
}

const Games = () => {
    const navigate = useNavigate()
    const [game, setGame] = useState("");

    const onGameLaunch = (game) => {
        setGame(games[game])
        document.body.style.overflowY = "hidden"
        navigate("")
    };

    const turnOff = () => {
        setGame("")
        document.body.style.overflowY = "scroll"
    };

    return (
        <div className={classes.container}>
            <Header/>

            <div className={classes.games_wrapper}>
                <GamesList onGameLaunch={onGameLaunch}/>
                <Categories/>
            </div>

            <CSSTransition in={game !== ""} timeout={200} classNames="launch-animation" unmountOnExit>
                <Launch game={game} turnOff={turnOff}/>
            </CSSTransition>
        </div>
    );
};

export default Games;
