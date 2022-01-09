import React from "react";
import {Link} from "react-router-dom";

function PossibleTradeGame({game, handleTrade}) {
    return (
        <div className="gameDiv"> 
            <img className="gameImage" src={game.image}></img>
            <Link className="tradeHistoryLink" to={`/games/${game.id}`}>{game.title}</Link>
            <p className="tradeHistoryPlatform">{game.platform}</p>
            <button className="tradeHistoryButton" onClick={() => handleTrade(game)}>Trade</button>
        </div>
    )
}

export default PossibleTradeGame;