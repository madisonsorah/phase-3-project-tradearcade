import React, {useState, useEffect} from "react";
import NavBar from "./NavBar"
import {Link} from "react-router-dom";
import TradeHistoryGame from "./TradeHistoryGame";

function TradeHistory({isLoggedIn, currentUser}) {
    const [sentGames, setSentGames] = useState([])
    const [receivedGames, setReceivedGames] = useState([])
    const [games, setGames] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/tradehistory")
        .then(resp => resp.json())
        .then(history => handleFetch(history))
    },[])
    
    function handleFetch(history) {
        const usersHistory = history.filter(h => h.user_id == currentUser.id)
         setSentGames(usersHistory.filter(h => h.game_sent == false))
         setReceivedGames(usersHistory.filter(h => h.game_received == false))
    }

    // const gamesReceived = receivedGames.map((history) => (
    //     <TradeHistoryGame history={ history } />
    // ))

    const gamesSent = sentGames.map((history) => (
        <TradeHistoryGame history={ history } />
    ))

    useEffect(() => {
        fetch(`http://localhost:9292/users/${currentUser.id}/games`)
        .then((response) => response.json())
        .then((userGamesData) => setGames(userGamesData))
    }, [])

    const renderedUserGames = games.map((game) =>  {
        return (
            <div className="gameDiv">
                <img className="memberPageGameImage" src={game.image}></img>
                <Link className="memberPageGameTitle" to={`/games/${game.id}`}>{game.title}</Link>
                <p className="memberPagePlatform">{game.platform}</p>
            </div>
        )
    })

    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn} />
            <div className="tradeHistoryDiv">
                <div className="tradeHistorySentListDiv">
                    <h1 className="tradeHistorySentListH1">Listed Games</h1>
                    <ul className="tradeHistorySentListUl">
                        {renderedUserGames}
                        {/* {gamesReceived} */}
                    </ul>
                </div>
                <div className="tradeHistoryReceivedListDiv">
                    <h1 className="tradeHistoryReceivedListH1">Games Received</h1>
                    <ul className="tradeHistoryReceivedListUl">
                        {gamesSent}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TradeHistory;