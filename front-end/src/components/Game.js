import React from "react";
import { Link } from "react-router-dom";

function Game({game}) {
    return (
        <div className="gameDiv"> 
            <img className="gameImage" src={game.image}></img>
            <Link className="gameLink" to={`/games/${game.id}`}>{game.title}</Link>
            <p className="gamePlatform">{game.platform}</p>
        </div>
    )
}

export default Game;