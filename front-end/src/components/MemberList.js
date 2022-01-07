import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function MemberList({isLoggedIn}) {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(`http://localhost:9292/users`)
        .then((response) => response.json())
        .then((userData) => setUsers(userData))
    })
    
    const renderMembers = searchedUsers().map((user) => (
        <div>
            <Link to={`/member/${user.id}`}>{user.username}</Link>
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
                <input value={search} placeholder="Search for Members" onChange={(e) => setSearch(e.target.value)}></input>
                {renderMembers}
            </div>
        </div>
    )
}

export default MemberList;