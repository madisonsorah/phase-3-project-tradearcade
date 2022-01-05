import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div className="mainNavDiv">
            <ul className="navBarUl">
                <li className="navBarLi">TradeArcade</li>
                <li className="navBarLi">Browse Games</li>
                <Link to="/login" className="navBarLink">Login</Link>
                <Link to="/account" className="navBarLink">Account</Link>
            </ul>
        </div>
    )
}

export default NavBar;