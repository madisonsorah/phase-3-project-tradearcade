import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import tradearcadeinvaderavatar from "../images/tradearcadeinvaderavatar.png"

function MemberPage({currentUser, setCurrentUser, isLoggedIn}) {
    let { id } = useParams();
    const [user, setUser] = useState([]);
    const [games, setGames] = useState([]);
    const [ownPage, setOwnPage] = useState(false)
    const [existingTrades ,setExistingTrades] = useState([])

    useEffect(() => {
        fetch("http://localhost:9292/trades")
        .then(resp => resp.json())
        .then(trades => setExistingTrades(trades))
    },[])
    function renderRequestTradeButtons(game) {
        if (id == currentUser.id){
            console.log("Your Page")
        } else if (currentUser.id == undefined) {
            console.log("Not Logged in")
        } else {
          return <button onClick={() => tradeGame(game)}>Request Trade</button>
        }
    }

    function tradeGame(game) {
        console.log(game.id)
        const tradeRequest = {
            requesterID: currentUser.id,
            requester_gameID: undefined,
            approverID: id,
            approver_gameID: game.id,
            pending: true,
            accepted: false,
            denied: false
        }
        const matchingTrade = existingTrades.find(t => t.requesterID == tradeRequest.requesterID)
        console.log(matchingTrade)
        console.log(tradeRequest)
        console.log(tradeRequest == matchingTrade)
        const config = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accepts: "application/json",
            },
            body: JSON.stringify(tradeRequest),
        };
        if (matchingTrade == undefined){
            fetch("http://localhost:9292/trades", config)
            .then((resp) => resp.json())
            .then((trades) => console.log(trades))
            .then(
                fetch("http://localhost:9292/trades")
                .then(resp => resp.json())
                .then(trades => setExistingTrades(trades)))
        }else if(matchingTrade.requesterID == tradeRequest.requesterID && matchingTrade.approverID == tradeRequest.approverID) {
            console.log("You already have an ongoing trade with this person")
        } else {
        fetch("http://localhost:9292/trades", config)
            .then((resp) => resp.json())
            .then((trades) => setExistingTrades(trades))
            .then(
                fetch("http://localhost:9292/trades")
                .then(resp => resp.json())
                .then(trades => setExistingTrades(trades)))
    }}

    useEffect(() => {
        fetch(`http://localhost:9292/users/${id}`)
        .then((response) => response.json())
        .then((userData) => setUser(userData))

        fetch(`http://localhost:9292/users/${id}/games`)
        .then((response) => response.json())
        .then((userGamesData) => setGames(userGamesData))
    }, [])

    const renderedUserGames = games.map((game) =>  {
        return (
            <li className="memberGameLi">
                <img className="memberPageGameImage" src={game.image}></img>
                <Link to={`/games/${game.id}`}>{game.title}</Link>
                <p>{game.platform}</p>
                {renderRequestTradeButtons(game)}
                {/* {console.log(game)} */}
            </li>
        )
    })

    return (
        <div> 
            <NavBar isLoggedIn={isLoggedIn} />
            <div className="memberPageDiv">
                <div className="memberPageFloatContainer">
                    <div className="memberPageFloatLeft">
                        <img className="memberPageAvatar" src={tradearcadeinvaderavatar}></img>
                        <h1>{user.first_name} {user.last_name}</h1>
                        <h3>{user.username}</h3>
                    </div>
                    <div className="memberPageFloatRight">
                        <h2>Games Available For Trade</h2>
                        <ul>
                            {renderedUserGames}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberPage;