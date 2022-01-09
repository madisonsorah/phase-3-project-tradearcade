import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"
import Game from "./Game"
import GamePage from "./GamePage"
import tradearcadesearchicon from "../images/tradearcadesearchicon.png"

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
            <div className="browseGamesContainer">
                <h1 className="browseGamesHeader">Games</h1>
                <h3 className="browseGamesSubHead">Game titles available for trade.</h3>
                <input className="browseGamesSearch" value={search} placeholder="Search for Games" onChange={(e) => setSearch(e.target.value)}></input>
                <img className="browseGamesSearchIcon" src={tradearcadesearchicon}></img>
                <div className="browseGamesFilter">
                <label className="browseGamesFilterLabel">Filter by Platform </label> 
                <select className="browseGamesFilterSelect" name="platforms" onChange={(e) => setPlatformFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Nintendo Switch">Nintendo Switch</option>
                    <option value="PlayStation 4">PlayStation 4</option>
                    <option value="Xbox Series X">Xbox Series X</option>
                </select>
            </div>
            <div className="browseGamesList">
                {displayedGame ? <GamePage isLoggedIn={isLoggedIn} displayedGame={displayedGame} setDisplayedGame={setDisplayedGame} allUsers={allUsers} /> : renderedGames }
            </div>
            </div>
        </div>
    )
}

export default BrowseGames;