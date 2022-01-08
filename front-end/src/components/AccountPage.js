import React, {useState, useEffect} from "react";
import NavBar from "./NavBar"
import { Link } from "react-router-dom";
import TradeRequest from "./TradeRequest";
import TradeWindow from "./TradeWindow";

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
    const [myGames, setMyGames] = useState([])
    const [selectedTradeOffer, setSelectedTradeOffer] = useState()
    const [RequesterID, setRequesterID] = useState()
    // const [myGames, setMyGames] = useState([])
    useEffect(() => {
        fetch(`http://localhost:9292/users/${currentUser.id}/games`)
        .then(resp => resp.json())
        .then(myGames => setMyGames(myGames))
    },[])

    console.log(myGames)
// setMyGames
    // const myOwnerships = ownerships.filter(o => o.user_id == currentUser.id)
    // const myGames = allGames.filter(g => g.id == myOwnerships)
    // console.log(myOwnerships)
    // console.log(myGames)
    // const myGames = 

    const [tradeWindow, setTradeWindow] = useState(false)
    const [ownerships, setOwnerships] = useState([])

    
    const myTrades = allTrades.filter(t => t.approverID == currentUser.id)
    // console.log(myTrades)
    // console.log(allUsers)
    // console.log(M)
    // const tradeUsers = allUsers.filter(u => u.id == )
    // console.log(tradeUsers)
    // const myTradeGamesID = myTrades.map(t => t.approver_gameID)
    // const myTradeRequesters = myTrades.map(t => t.requesterID)
    // const myTradeGames = allGames.filter(g => g.id == myTradeGamesID)
    useEffect(() => {
        fetch("http://localhost:9292/ownerships")
        .then(resp => resp.json())
        .then(ownerships => setOwnerships(ownerships))
    },[])
    function handleTrade(game) {
        const selectedOwnership = ownerships.find(o => o.game_id == game.id && o.user_id == currentUser.id)
        console.log(selectedOwnership)
        console.log(`requesterID=${RequesterID}`)
        console.log(RequesterID)
       const data = {
            id: selectedOwnership.id,
            game_id: selectedOwnership.game_id,
            user_id: RequesterID
        }
        const config = {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                Accepts: "application/json",
            },
            body: JSON.stringify(data),
        };
        fetch(`http://localhost:9292/ownerships/${selectedOwnership.id}`, config)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
    function handleAccept(game, trade, requester) {
        setTradeWindow(true)
        setSelectedTradeOffer(game)
        console.log(trade)
        // console.log(requester)
        setRequesterID(requester.id)
    }
    const renderMyTrades = myTrades.map((trade) => {
        return <TradeRequest TradeRequest={setTradeWindow} setTradeWindow={setTradeWindow} trade={trade} allGames={allGames} allUsers={allUsers} myTrades={myTrades} handleAccept={handleAccept}/>
    })
    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn}/>
            <div className="accountPageDiv">
                <h1 className="accountPageH1">My Account</h1>
                <div>
                    <h1 className="accountPageH1">Game Requests</h1>
                    {tradeWindow ? <TradeWindow myGames={myGames} setTradeWindow={setTradeWindow} handleTrade={handleTrade}/> : console.log("noTradeWindow")}
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