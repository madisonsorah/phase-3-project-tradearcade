import React from "react";
import NavBar from "./NavBar"
import { Link } from "react-router-dom";

function AccountPage({isLoggedIn, currentUser}) {
    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn}/>
            <div className="accountPageDiv">
                <h1 className="accountPageH1">My Account</h1>
                <div>
                    <h1 className="accountPageH1">Game Requests</h1>
                </div>
                <h1 className="accountPageH1">Menu</h1>
                <div className="accountPageMenu">
                    <ul className="accountPageUl">
                        <Link to="/tradegame" className="accountPageLink">TEST Trade in a Game</Link>
                        <Link to="/tradehistory" className="accountPageLink">Game Trade History</Link>
                        <Link to="/gamereviews" className="accountPageLink">Game Reviews</Link>
                        <Link to="/gamewishlist" className="accountPageLink">Game Wishlist</Link>
                        <p className="accountPageLogout">Logout</p>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AccountPage;