import React from "react";
import { Link } from "react-router-dom";


function NavBar(currentUser, setCurrentUser) {
    return (
        <div className="mainNavDiv">
            <ul className="navBarUl">
                <li className="navBarLi">TradeArcade</li>
                <li className="navBarLi">Browse Games</li>
                <Link to="/login" className="navBarLink" currentUser={currentUser} setCurrentUser={setCurrentUser}>Login</Link>
                <Link to="/account" className="navBarLink">Account</Link>
            </ul>
        </div>
    )
}

export default NavBar;