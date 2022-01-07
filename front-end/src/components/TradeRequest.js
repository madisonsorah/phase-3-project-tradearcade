import React from "react";
import { Link } from "react-router-dom";

function TradeRequest({trade, allUsers, myTrades, allGames}) {
    console.log(trade)
    const game = allGames.find(g => g.id == trade.approver_gameID)
    const requester = allUsers.find(u => u.id == trade.requesterID)
    return (
        <div className="gameDiv"> 
            <img className="gameImage" src={game.image}></img>
            <Link to={`/games/${game.id}`}>{game.title}</Link>
            <p>{game.platform}</p>
            <p>Requested By: {requester.username}</p>
            <button>Accept</button>
            <button>Deny</button>
        </div>
    )
}

export default TradeRequest;