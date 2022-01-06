import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"

function BrowseGames() {
    const [games, setGames] = useEffect([])

    useEffect(() => {
        fetch('http://localhost:9292/games')
        .then((response) => response.json())
        .then((gameData) => setGames(gameData))
    }, []);


    renderedGames = games.map((game) => {
        return (
            <div>
                <img src={game.img}></img>
                <h2>{game.title}</h2>
                <p>{game.platform}</p>
            </div>
        )
    })

    return (
        <div>
            <NavBar />
            <div>
                {/* {renderedGames} */}
            </div>
        </div>
    )
}

export default BrowseGames;