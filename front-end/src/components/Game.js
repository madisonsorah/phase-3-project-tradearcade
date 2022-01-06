import React from "react";
import { Link } from "react-router-dom";

function Game({game}) {
    return (
        <div className="gameDiv"> 
            <img className="gameImage" src={game.image}></img>
            <Link to={`/games/${game.id}`}>{game.title}</Link>
            <p>{game.platform}</p>
        </div>
    )
}

export default Game;