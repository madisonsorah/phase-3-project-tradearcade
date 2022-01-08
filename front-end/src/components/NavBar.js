import React from "react";
import tradearcadelogo from "../images/tradearcadelogo.png"
import { Link } from "react-router-dom";


function NavBar({currentUser, setCurrentUser, isLoggedIn}) {
    return (
        <div className="mainNavDiv">
            <div className="navImgDiv">
                <Link to= "/" className="navBarLink">
                    <img alt="TradeArcade Logo" className="navLogo" src={tradearcadelogo}></img>
                </Link>
            </div>
            <ul className="navBarUl">
                <Link to="/browsegames" className="navBarLink">Browse Games</Link>
                <Link to="/members" className="navBarLink">Member List</Link>
                {isLoggedIn()}
            </ul>
        </div>
    )
}

export default NavBar;