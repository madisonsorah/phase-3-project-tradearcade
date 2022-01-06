import React from "react";

function Game({ game, handleGameClick }) {
    return (
        <div className="gameDiv" onClick={() => handleGameClick(game)}> 
            <img className="gameImage" src={game.image}></img>
            <h2>{game.title}</h2>
            <p>{game.platform}</p>
        </div>
    )
}

export default Game;