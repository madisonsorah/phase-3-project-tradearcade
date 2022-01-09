import React from "react";
import tradearcadelogo from "../images/tradearcadelogo.png"
import { Link } from "react-router-dom";
import tradearcadeinvaderavatar from "../images/tradearcadeinvaderavatar.png"


function NavBar({currentUser, setCurrentUser, isLoggedIn}) {
    return (
        <div className="mainNavDiv">
            <div className="navLogoDiv">
                    <Link to= "/" className="navBarLink">
                        <img alt="TradeArcade Logo" className="navLogo" src={tradearcadelogo}></img>
                    </Link>
                </div>
            <ul className="navBarUl">
                <Link to="/browsegames" className="navBarLink">BROWSE GAMES</Link>
                <Link to="/members" className="navBarLink">MEMBER LIST</Link>
            </ul>
            <img className="navBarInvader" src={tradearcadeinvaderavatar}></img>
            {isLoggedIn()}
        </div>
    )
}

export default NavBar;