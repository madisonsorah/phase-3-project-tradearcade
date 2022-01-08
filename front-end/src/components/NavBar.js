import React from "react";
import { Link } from "react-router-dom";


function NavBar({currentUser, setCurrentUser, isLoggedIn}) {
    return (
        <div className="mainNavDiv">
            <ul className="navBarUl">
                <Link to= "/" className="navBarLink">TradeArcade</Link>
                <Link to="/browsegames" className="navBarLink">Browse Games</Link>
                <Link to="/members" className="navBarLink">Member List</Link>
                {isLoggedIn()}
            </ul>
        </div>
    )
}

export default NavBar;