import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"
import Game from "./Game"
import GamePage from "./GamePage"

function BrowseGames() {
    const [games, setGames] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [displayedGame, setDisplayedGame] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9292/games')
        .then((response) => response.json())
        .then((gameData) => setGames(gameData))
    }, []);

    useEffect(() => {
        fetch("http://localhost:9292/users")
        .then(resp => resp.json())
        .then(users => setAllUsers(users))
    },[])

    function handleGameClick(game) {
        setDisplayedGame(game)
    }

    const renderedGames = games.map((game) => (
        <Game game={ game } handleGameClick={handleGameClick}/>
    ))

    return (
        <div className="browseGamesDiv">
            <NavBar />
            <div>
               {displayedGame ? <GamePage displayedGame={displayedGame} setDisplayedGame={setDisplayedGame} allUsers={allUsers} /> : renderedGames }
            </div>
        </div>
    )
}

export default BrowseGames;