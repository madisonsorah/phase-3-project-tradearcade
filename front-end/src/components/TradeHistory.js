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
                        {/* <li className="tradeHistorySentListLi">Final Fantasy X - PlayStation 4</li>
                        <li className="tradeHistorySentListLi">Soul Calibur - GameCube</li>
                        <li className="tradeHistorySentListLi">The Legend of Zelda: Windwaker - Wii</li> */}
                    </ul>
                </div>
                <div className="tradeHistoryReceivedListDiv">
                    <h1 className="tradeHistoryReceivedListH1">Games Received</h1>
                    <ul className="tradeHistoryReceivedListUl">
                        {gamesSent}
                        {/* <li className="tradeHistoryReceivedListLi">Ni No Kuni: Wrath of the White Witch - PlayStation 4</li>
                        <li className="tradeHistoryReceivedListLi">Hades - Nintendo Switch</li>
                        <li className="tradeHistoryReceivedListLi">GoldenEye 007 - Nintendo 64</li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TradeHistory;