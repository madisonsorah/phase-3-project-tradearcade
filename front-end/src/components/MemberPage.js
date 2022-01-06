import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import NavBar from "./NavBar";

function MemberPage() {
    let { id } = useParams();
    const [user, setUser] = useState([])

    
    useEffect(() => {
        fetch(`http://localhost:9292/users/${id}`)
        .then((response) => response.json())
        .then((userData) => setUser(userData))
    }, [])


    return (
        <div> 
            <NavBar />
            <div>
                <img alt="avatar"></img>
                <h1>{user.first_name} {user.last_name}</h1>
                <h3>{user.username}</h3>
                {user.bio ? (<p>{user.bio}</p>) : null}
                <p>Followers</p>
                <p>Following</p>
                <button>Follow</button> 
                <button>Unfollow</button>
                <ul>Games Available For Trade
                    <li>Game 1</li>
                    <button>Request Game</button>
                    <li>Game 2</li>
                    <button>Request Game</button>
                    <li>Game 3</li>
                    <button>Request Game</button>
                </ul>
            </div>
        </div>
    )
}

export default MemberPage;