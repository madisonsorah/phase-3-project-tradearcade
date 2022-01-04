import React from "react";
import NavBar from "./NavBar"
import { Link } from "react-router-dom";

function AccountPage() {
    return (
        <div>
            <NavBar />
            <div className="accountPageDiv">
                <h1 className="accountPageH1">My Account</h1>
                <div className="accountPageListLeft">
                    <ul className="accountPageUl">
                        <Link to="/tradegame" className="accountPageLink">Trade in a game</Link>
                        <Link to="/tradehistory" className="accountPageLink">Game trade history</Link>
                        <Link to="/gamereviews" className="accountPageLink">Game reviews</Link>
                        <Link to="/gamewishlist" className="accountPageLink">Game Wishlist</Link>
                    </ul>
                </div>
                <div className="accountPageListRight">
                    <ul className="accountPageUl">
                        <Link to="/followers" className="accountPageLink">Followers</Link>
                        <Link to="/followlist" className="accountPageLink">Members you follow</Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AccountPage;