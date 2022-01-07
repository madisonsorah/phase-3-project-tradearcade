import React from "react";
import NavBar from "./NavBar"
import { Link } from "react-router-dom";

function AccountPage({isLoggedIn}) {
    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn}/>
            <div className="accountPageDiv">
                <h1 className="accountPageH1">My Account</h1>
                <div className="accountPageListLeft">
                    <ul className="accountPageUl">
                        <Link to="/tradegame" className="accountPageLink">Trade in Game</Link>
                        <Link to="/tradehistory" className="accountPageLink">Game Trade History</Link>
                        <Link to="/gamereviews" className="accountPageLink">Game Reviews</Link>
                        <Link to="/gamewishlist" className="accountPageLink">Game Wishlist</Link>
                    </ul>
                </div>
                <div className="accountPageListRight">
                    <ul className="accountPageUl">
                        <Link to="/followers" className="accountPageLink">Followers</Link>
                        <Link to="/followlist" className="accountPageLink">Members You Follow</Link>
                    </ul>
                </div>
                <p className="accountPageLogout">Logout</p>
            </div>
        </div>
    )
}

export default AccountPage;