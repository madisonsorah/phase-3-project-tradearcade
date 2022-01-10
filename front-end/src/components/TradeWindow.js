import React, {useState, useEffect} from "react";
import PossibleTradeGame from "./PossibleTradeGame";

function TradeWindow({myGames, setTradeWindow, handleTrade}) {
    const renderedGames = myGames.map((game) => (
        <PossibleTradeGame handleTrade={handleTrade} game={ game } />
    ))

    return (
        <div className="tradeHistorySentListUl2"> 
            {renderedGames}
            <button className="sendGameFormButton" onClick={() => setTradeWindow(false)}>Close</button>
        </div>
    )
}

export default TradeWindow;