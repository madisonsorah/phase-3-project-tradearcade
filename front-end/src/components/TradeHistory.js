import React from "react";
import NavBar from "./NavBar"

function TradeHistory() {
    return (
        <div>
            <NavBar />
            <div>
            <div className="tradeHistorySentListDiv">
                <h1>Games Sent</h1>
                <ul className="sentGameListUl">
                    <li>Final Fantasy X - PlayStation 4</li>
                    <li>Soul Calibur - GameCube</li>
                    <li>The Legend of Zelda: Windwaker - Wii</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default TradeHistory;