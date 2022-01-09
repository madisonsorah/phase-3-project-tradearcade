import React, {useState, useEffect} from "react";
import NavBar from "./NavBar"
import TradeHistoryGame from "./TradeHistoryGame";

function TradeHistory({isLoggedIn, currentUser}) {
    const [sentGames, setSentGames] = useState([])
    const [receivedGames, setReceivedGames] = useState([])
    
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

    const gamesReceived = receivedGames.map((history) => (
        <TradeHistoryGame history={ history } />
    ))

    const gamesSent = sentGames.map((history) => (
        <TradeHistoryGame history={ history } />
    ))
    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn} />
            <div className="tradeHistoryDiv">
                <div className="tradeHistorySentListDiv">
                    <h1 className="tradeHistorySentListH1">Games Sent</h1>
                    <ul className="tradeHistorySentListUl">
                        {gamesReceived}
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