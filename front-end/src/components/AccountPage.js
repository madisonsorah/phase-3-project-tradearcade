import React, {useState, useEffect} from "react";
import NavBar from "./NavBar"
import { Link } from "react-router-dom";
import TradeRequest from "./TradeRequest";
import TradeWindow from "./TradeWindow";

function AccountPage({isLoggedIn, currentUser, allTrades, allGames, allUsers, setAllTrades, setCurrentUser}) {
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
    const [requester, setRequester] = useState()
    // const [myGames, setMyGames] = useState([])
    // useEffect(() => {
    //     fetch(`http://localhost:9292/users/${currentUser.id}/games`)
    //     .then(resp => resp.json())
    //     .then(myGames => setMyGames(myGames))
    // },[])

    console.log(myGames)
// setMyGames
    // const myOwnerships = ownerships.filter(o => o.user_id == currentUser.id)
    // const myGames = allGames.filter(g => g.id == myOwnerships)
    // console.log(myOwnerships)
    // console.log(myGames)
    // const myGames = 

    const [tradeWindow, setTradeWindow] = useState(false)
    const [ownerships, setOwnerships] = useState([])
    const [myTrades, setMyTrades] = useState([])
    const configDelete = {
        method: "DELETE",
    };
    
    const myTradesPreset = allTrades.filter(t => t.approverID == currentUser.id)
     useEffect(() => {setMyTrades(myTradesPreset)},[])
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
        console.log(game)
        console.log(requester)
        const selectedOwnership = ownerships.find(o => o.game_id == game.id && o.user_id == requester.id)
        console.log(selectedOwnership)
        const requesterOwnership = ownerships.find(o => o.game_id == selectedTradeOffer.id && o.user_id == currentUser.id)
        console.log(requesterOwnership)
        const selectedTrade = myTrades.find(t => t.requesterID == selectedOwnership.user_id && t.approverID == requesterOwnership.user_id)
        console.log(selectedOwnership)
        console.log(`requesterID=${RequesterID}`)
        // console.log(RequesterID)
        console.log("here")
        console.log(myTrades)
        console.log(requesterOwnership.user_id)
        console.log(selectedOwnership.user_id)
        console.log("^")
        
        console.log(selectedTrade)
       const data = {
            id: selectedOwnership.id,
            game_id: selectedOwnership.game_id,
            user_id: currentUser.id
        }
        const data2 = {
            id: requesterOwnership.id,
            game_id: requesterOwnership.game_id,
            user_id: requester.id
        }
        const config = {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                Accepts: "application/json",
            },
            body: JSON.stringify(data),
        };
        const config2 = {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                Accepts: "application/json",
            },
            body: JSON.stringify(data2),
        };
        
        fetch(`http://localhost:9292/ownerships/${selectedOwnership.id}`, config)
        .then(resp => resp.json())
        .then(data => console.log(data))
        .then(
        fetch(`http://localhost:9292/ownerships/${requesterOwnership.id}`, config2)
        .then(resp => resp.json())
        .then(data2 => console.log(data2)))
        fetch(`http://localhost:9292/trades/${selectedTrade.id}`, configDelete)
        .then(resp => resp.json())
        .then(trades => setMyTrades(trades))

        console.log(myTrades)

        
            // setTimeout(fetch("http://localhost:9292/trades")
            // .then(resp => resp.json())
            // .then(trades => setAllTrades(trades))
            // .then(setMyTrades(myTradesPreset))
            // .then(console.log(myTrades)),1000)


        // const ele = document.querySelector('.gameDiv + .gameDiv')
        // ele.remove()
        setTradeWindow(false)
        // document.querySelector(`#${selectedTrade.id}`).remove()
        // const gamediv = selectedTrade.id
        // document.querySelector(`#${gamediv}`).remove()
    }

    function handleAccept(game, trade, requester) {
        console.log(myTrades)
        setSelectedTradeOffer(game)
        console.log(selectedTradeOffer)
        console.log(trade)
        // console.log(requester)
        setRequesterID(requester.id)
        setRequester(requester)
        
        fetch(`http://localhost:9292/users/${requester.id}/games`)
        .then(resp => resp.json())
        .then(myGames => setMyGames(myGames))
        .then(setTradeWindow(true))

        // setTimeout(setTradeWindow(true),100)

        console.log(requester)
    }

    function handleDeny(trade, e) {
        // setRequester(requester)
        // setSelectedTradeOffer(game)
        // console.log(ownerships)
        // const selectedOwnership = ownerships.find(o => o.game_id == game.id && o.user_id == requester.id)
        // console.log(selectedOwnership)
        // const requesterOwnership = ownerships.find(o => o.game_id == selectedTradeOffer.id && o.user_id == currentUser.id)
        // console.log(requesterOwnership)
        // const selectedTrade = myTrades.find(t => t.requesterID == selectedOwnership.user_id && t.approverID == requesterOwnership.user_id)

        fetch(`http://localhost:9292/trades/${trade.id}`, configDelete)
        e.target.parentElement.remove()
        setTradeWindow(false)
    }
    const renderMyTrades = myTrades.map((trade) => {
        return <TradeRequest handleDeny={handleDeny} TradeRequest={setTradeWindow} setTradeWindow={setTradeWindow} trade={trade} allGames={allGames} allUsers={allUsers} myTrades={myTrades} handleAccept={handleAccept}/>
    })
    console.log(renderMyTrades)
    function renderTradesAndEmpty() {
        if (renderMyTrades == false) {
            return <h2>You do not currently have any trade requests!</h2>
        } else {
            return renderMyTrades
        }
    }
    function handleLogout() {
        setCurrentUser(false)
        this.reload()
    }
    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn}/>
            <div className="accountPageDiv">
                <h1 className="accountPageH1">My Account</h1>
                <div>
                    <h1 className="accountPageH1">Game Requests</h1>
                    {tradeWindow ? <TradeWindow myGames={myGames} setTradeWindow={setTradeWindow} handleTrade={handleTrade}/> : console.log("noTradeWindow")}
                    {renderTradesAndEmpty()}
                </div>
                <h1 className="accountPageH1">Menu</h1>
                <div className="accountPageMenu">
                    <ul className="accountPageUl">
                        <Link to="/tradegame" className="accountPageLink">Trade in a Game</Link>
                        <Link to="/tradehistory" className="accountPageLink">Game Trade History</Link>
                        <Link to="/gamereviews" className="accountPageLink">Game Reviews</Link>
                        <Link to="/gamewishlist" className="accountPageLink">Game Wishlist</Link>
                        <Link to="/login"className="accountPageLogout" onClick={() => handleLogout()}>Logout</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AccountPage;