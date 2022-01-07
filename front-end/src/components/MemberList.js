import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function MemberList({isLoggedIn}) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/users`)
        .then((response) => response.json())
        .then((userData) => setUsers(userData))
    })
    
    const renderMembers = users.map((user) => (
        <div>
            <Link to={`/member/${user.id}`}>{user.username}</Link>
        </div>
    ))
    
    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn}/>
            <div className="memberListDiv">
                {renderMembers}
            </div>
        </div>
    )
}

export default MemberList;