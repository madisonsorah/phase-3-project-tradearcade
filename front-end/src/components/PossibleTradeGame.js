import React from "react";
import { Link } from "react-router-dom";

function PossibleTradeGame({game, handleTrade}) {
    return (
        <div className="gameDiv"> 
            <img className="gameImage" src={game.image}></img>
            <Link to={`/games/${game.id}`}>{game.title}</Link>
            <p>{game.platform}</p>
            <button onClick={() => handleTrade(game)}>Trade</button>
        </div>
    )
}

export default PossibleTradeGame;