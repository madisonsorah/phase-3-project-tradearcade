import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import tradearcadeinvaderavatar from "../images/tradearcadeinvaderavatar.png"

function MemberList({isLoggedIn}) {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(`http://localhost:9292/users`)
        .then((response) => response.json())
        .then((userData) => setUsers(userData))
    },[])
    
    const renderMembers = searchedUsers().map((user) => (
        <div className="memberListMember">
            <img className="memberListAvatar" src={tradearcadeinvaderavatar}></img>
            <Link className="memberListLink" to={`/member/${user.id}`}>{user.username}</Link>
        </div>
    ))

    function searchedUsers() {
        if(search == ""){
            return users
        } else {
            return users.filter(user => user.username.toLowerCase().includes(search.toLowerCase()))
        }
    }
    
    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn}/>
            <div className="memberListDiv">
                <input className="memberListSearch" value={search} placeholder="Search for Members" onChange={(e) => setSearch(e.target.value)}></input>
                <div className="memberListContainer">
                <h1 className="memberListHeader">Current Members</h1>
                    {renderMembers}
                </div>
            </div>
        </div>
    )
}

export default MemberList;