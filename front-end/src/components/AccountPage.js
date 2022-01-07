import React, {useState, useEffect} from "react";
import NavBar from "./NavBar"
import { Link } from "react-router-dom";
import TradeRequest from "./TradeRequest";

function AccountPage({isLoggedIn, currentUser, allTrades, allGames, allUsers}) {
    // const [allTrades, setAllTrades] = useState([])
    // const [allGames, setAllGames] = useState([])
    // const [allUsers, setAllUSers] = useState([])
    // useEffect(() => {
    //     fetch("http://localhost:9292/trades")
    //     .then(resp => resp.json())
    //     .then(trades => setAllTrades(trades))
    // },[])
    // useEffect(() => {
    //     fetch("http://localhost:9292/games")
    //     .then(resp => resp.json())
    //     .then(games => setAllGames(games))
    // },[])
    // useEffect(() => {
    //     fetch("http://localhost:9292/users")
    //     .then(resp => resp.json())
    //     .then(users => setAllUSers(users))
    // },[])

    
    const myTrades = allTrades.filter(t => t.approverID == currentUser.id)
    // console.log(myTrades)
    // console.log(allUsers)
    // console.log(M)
    // const tradeUsers = allUsers.filter(u => u.id == )
    // console.log(tradeUsers)
    // const myTradeGamesID = myTrades.map(t => t.approver_gameID)
    // const myTradeRequesters = myTrades.map(t => t.requesterID)
    // const myTradeGames = allGames.filter(g => g.id == myTradeGamesID)
    const renderMyTrades = myTrades.map((trade) => {
        return <TradeRequest trade={trade} allGames={allGames} allUsers={allUsers} myTrades={myTrades}/>
    })
    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn}/>
            <div className="accountPageDiv">
                <h1 className="accountPageH1">My Account</h1>
                <div>
                    <h1 className="accountPageH1">Game Requests</h1>
                    {renderMyTrades}
                </div>
                <h1 className="accountPageH1">Menu</h1>
                <div className="accountPageMenu">
                    <ul className="accountPageUl">
                        <Link to="/tradegame" className="accountPageLink">TEST Trade in a Game</Link>
                        <Link to="/tradehistory" className="accountPageLink">Game Trade History</Link>
                        <Link to="/gamereviews" className="accountPageLink">Game Reviews</Link>
                        <Link to="/gamewishlist" className="accountPageLink">Game Wishlist</Link>
                        <p className="accountPageLogout">Logout</p>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AccountPage;