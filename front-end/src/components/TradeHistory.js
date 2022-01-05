import React from "react";
import NavBar from "./NavBar"

function TradeHistory() {
    return (
        <div>
            <NavBar />
            <div className="sendGameDiv">
                <div className="tradeHistorySentListDiv">
                    <h1>Games Sent</h1>
                    <ul className="tradeHistorySentListUl">
                        <li>Final Fantasy X - PlayStation 4</li>
                        <li>Soul Calibur - GameCube</li>
                        <li>The Legend of Zelda: Windwaker - Wii</li>
                    </ul>
                </div>
                <div className="tradeHistoryReceivedListDiv">
                    <h1>Games Received</h1>
                    <ul className="tradeHistoryReceivedListUl">
                        <li>Ni No Kuni: Wrath of the White Witch - PlayStation 4</li>
                        <li>Hades - Nintendo Switch</li>
                        <li>GoldenEye 007 - Nintendo 64</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TradeHistory;