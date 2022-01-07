import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function MemberPage({currentUser, setCurrentUser, isLoggedIn}) {
    let { id } = useParams();
    const [user, setUser] = useState([]);
    const [games, setGames] = useState([]);
    
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
                <img className="memberGameImage" src={game.image}></img>
                <Link to={`/games/${game.id}`}>{game.title}</Link>
                <p>{game.platform}</p>
                <button>Request Trade</button>
            </li>
        )
    })

    return (
        <div> 
            <NavBar isLoggedIn={isLoggedIn} />
            <div className="memberPageDiv">
                <img alt="avatar"></img>
                <h1>{user.first_name} {user.last_name}</h1>
                <h3>{user.username}</h3>
                {user.bio ? (<p>{user.bio}</p>) : null}
                <h2>Games Available For Trade</h2>
                <ul>
                    {renderedUserGames}
                </ul>
            </div>
        </div>
    )
}

export default MemberPage;