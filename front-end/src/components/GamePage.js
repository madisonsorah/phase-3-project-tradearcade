import React from "react";

function GamePage({displayedGame, setDisplayedGame}) {
    return (
        <div>
            <div>
                <h1>{displayedGame.title}</h1>
                <img src={displayedGame.image} alt={displayedGame.title}></img>
                <h4>{displayedGame.platform}</h4>
                <p>{displayedGame.description}</p>
            </div>
            <button onClick={() => (setDisplayedGame(false))}>Back</button>
        </div>
    )
}

export default GamePage;