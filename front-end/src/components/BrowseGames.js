import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"
import Game from "./Game"
import GamePage from "./GamePage"

function BrowseGames({isLoggedIn}) {
    const [games, setGames] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [displayedGame, setDisplayedGame] = useState(false)
    const [search, setSearch] = useState("")

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

    function searchedGames() {
        if(search == ""){
            return games
        } else {
            return games.filter(game => game.title.toLowerCase().includes(search.toLowerCase()))
        }
    }

    const renderedGames = searchedGames().map((game) => (
        <Game game={ game } handleGameClick={handleGameClick}/>
    ))

    return (
        <div className="browseGamesDiv">
            <NavBar isLoggedIn={isLoggedIn}/>
            <input value={search} placeholder="Search for Games" onChange={(e) => setSearch(e.target.value)}></input>
            <div>
               {displayedGame ? <GamePage displayedGame={displayedGame} setDisplayedGame={setDisplayedGame} allUsers={allUsers} /> : renderedGames }
            </div>
        </div>
    )
}

export default BrowseGames;