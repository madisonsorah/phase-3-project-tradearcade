import React from "react";
import NavBar from "./NavBar";

function Reviews({isLoggedIn}) {
    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn}/>
            <div className="reviewsDiv">
                <h1>My Game Reviews</h1>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Reviews;