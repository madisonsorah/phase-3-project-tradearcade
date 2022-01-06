import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"
import Game from "./Game"

function BrowseGames() {
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/games')
        .then((response) => response.json())
        .then((gameData) => setGames(gameData))
    }, []);


    const renderedGames = games.map((game) => (
        <Game game={ game }/>
    ))

    return (
        <div>
            <NavBar />
            <div>
                { renderedGames }
            </div>
        </div>
    )
}

export default BrowseGames;