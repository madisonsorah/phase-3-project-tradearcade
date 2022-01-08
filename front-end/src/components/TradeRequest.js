import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function TradeRequest({trade, allUsers, myTrades, allGames, tradeWindow, setTradeWindow, handleAccept, handleDeny}) {
    console.log(trade.id)
    const game = allGames.find(g => g.id == trade.approver_gameID)
    const requester = allUsers.find(u => u.id == trade.requesterID)
    
    return (
        <div className="gameDiv" id={`${trade.id}`}> 
            <img className="gameImage" src={game.image}></img>
            <Link to={`/games/${game.id}`}>{game.title}</Link>
            <p>{game.platform}</p>
            <p>Requested By: {requester.username}</p>
            <button onClick={() => handleAccept(game, trade, requester)}>Accept</button>
            <button onClick={(e) => handleDeny(trade, e)}>Deny</button>
        </div>
    )
}

export default TradeRequest;