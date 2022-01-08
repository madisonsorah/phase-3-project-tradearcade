import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"
import Game from "./Game"
import GamePage from "./GamePage"

function BrowseGames({isLoggedIn}) {
    const [games, setGames] = useState([])
    const [allUsers, setAllUsers] = useState([])
    const [displayedGame, setDisplayedGame] = useState(false)
    const [search, setSearch] = useState("")
    const [platformFilter, setPlatformFilter] = useState("All")

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

    function platformFilterGames() {
        if(platformFilter == "All") {
            return searchedGames()
        } else {
            return searchedGames().filter(g => g.platform == platformFilter )
        }
    }

    const renderedGames = platformFilterGames().map((game) => (
        <Game game={ game } handleGameClick={handleGameClick}/>
    ))

    return (
        <div className="browseGamesDiv">
            <NavBar isLoggedIn={isLoggedIn}/>
            <input value={search} placeholder="Search for Games" onChange={(e) => setSearch(e.target.value)}></input>
            <div>
                {/* You can delete the label below if you want */}
                <label>Choose a Platform:</label> 
                <select name="platforms" onChange={(e) => setPlatformFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Nintendo Switch">Nintendo Switch</option>
                    <option value="PlayStation 4">PlayStation 4</option>
                    <option value="Xbox Series X">Xbox Series X</option>
                </select>
            </div>
            <div>
               {displayedGame ? <GamePage isLoggedIn={isLoggedIn} displayedGame={displayedGame} setDisplayedGame={setDisplayedGame} allUsers={allUsers} /> : renderedGames }
            </div>
        </div>
    )
}

export default BrowseGames;