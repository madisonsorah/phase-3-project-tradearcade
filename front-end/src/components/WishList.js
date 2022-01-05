import React from "react";
import NavBar from "./NavBar"

function WishList() {
    return (
        <div>
            <NavBar />
            <div className="wishListContainer">
                <h1 className="wishListHeader">Game Wish List</h1>
                <p className="wishListP">The games below have been added to your wish list.</p>
                <div className="wishListDiv"></div>
            </div>
        </div>
    )
}

export default WishList;