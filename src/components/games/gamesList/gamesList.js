import React, {useEffect} from 'react';
import classes from './gamesList.module.css'
import {useApiGet} from "../../../hooks/useApiGet";
import GameCard from "./gameCard/gameCard";
import Divider from "../divider/divider";
import {useCachedData} from "../stores/fetchedDataCache";
import {CSSTransition} from "react-transition-group";
import "../animations/games-error-animation.css"
import {GamesApis} from "../../../apis/gamesApi";

const GamesList = ({onGameLaunch}) => {
    const setGames = useCachedData((state) => state.setGames)
    const games = useCachedData((state) => state.filtered)

    const {loading, data, error} = useApiGet(GamesApis.Games)

    useEffect(() => {
        data !== null && setGames(data)
    }, [data])

    const onPlayButtonClicked = (name) => {
        onGameLaunch(name)
    };

    const renderGames = () => {
        const len = games.length

        return <div data-testid="games-wrapper" className={classes.games_wrapper}>
            {games.map((gameData, index) => {
                return <>
                    <GameCard gameData={gameData} onPlayButtonClicked={onPlayButtonClicked}/>
                    {index < len - 1 && <Divider/>}
                </>
            })}

            <CSSTransition in={len === 0} timeout={200} classNames="games-error-animation" unmountOnExit>
                <span className={classes.error}>No games found. Try to filter again.</span>
            </CSSTransition>
        </div>
    };

    if (loading) {
        return "Loading"
    }

    if (error) {
        return "Error in categories"
    }

    return (
        <div className={classes.container}>
            <span className={classes.title}>Games</span>
            <Divider marginBottom={"40px"} marginTop={"20px"}/>
            {renderGames()}
        </div>
    );
};

export default GamesList;
