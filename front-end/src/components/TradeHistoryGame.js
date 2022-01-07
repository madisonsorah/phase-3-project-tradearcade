import React from "react";
import { Link } from "react-router-dom";

function TradeHistoryGame({history}) {
    return (
        <div className="gameDiv"> 
            <img className="gameImage" src={history.game.image}></img>
            <Link to={`/games/${history.game.id}`}>{history.game.title}</Link>
            <p>{history.game.platform}</p>
        </div>
    )
}

export default TradeHistoryGame;