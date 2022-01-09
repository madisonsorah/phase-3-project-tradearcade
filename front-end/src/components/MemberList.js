import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import tradearcadeinvader from "../images/tradearcadeinvader.png"
import tradearcadesearchicon from "../images/tradearcadesearchicon.png"

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
            <img className="memberListAvatar" src={tradearcadeinvader}></img>
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
                <div className="memberListContainer">
                <h1 className="memberListHeader">Current Members</h1>
                <h3 className="memberListSubHead">Active members in our community.</h3>
                <input className="memberListSearch" value={search} placeholder="Search for Members" onChange={(e) => setSearch(e.target.value)}></input>
                <img className="memberListSearchIcon" src={tradearcadesearchicon}></img>
                    {renderMembers}
                </div>
            </div>
        </div>
    )
}

export default MemberList;