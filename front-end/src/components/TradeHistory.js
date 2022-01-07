import React from "react";
import NavBar from "./NavBar"

function TradeHistory({isLoggedIn}) {
    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn} />
            <div className="tradeHistoryDiv">
                <div className="tradeHistorySentListDiv">
                    <h1 className="tradeHistorySentListH1">Games Sent</h1>
                    <ul className="tradeHistorySentListUl">
                        <li className="tradeHistorySentListLi">Final Fantasy X - PlayStation 4</li>
                        <li className="tradeHistorySentListLi">Soul Calibur - GameCube</li>
                        <li className="tradeHistorySentListLi">The Legend of Zelda: Windwaker - Wii</li>
                    </ul>
                </div>
                <div className="tradeHistoryReceivedListDiv">
                    <h1 className="tradeHistoryReceivedListH1">Games Received</h1>
                    <ul className="tradeHistoryReceivedListUl">
                        <li className="tradeHistoryReceivedListLi">Ni No Kuni: Wrath of the White Witch - PlayStation 4</li>
                        <li className="tradeHistoryReceivedListLi">Hades - Nintendo Switch</li>
                        <li className="tradeHistoryReceivedListLi">GoldenEye 007 - Nintendo 64</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TradeHistory;