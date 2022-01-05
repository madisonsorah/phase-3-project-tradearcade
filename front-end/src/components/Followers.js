import React from "react";
import NavBar from "./NavBar"

function Followers() {
    return (
        <div>
            <NavBar />
            <div>
                <h1>My Followers</h1>
                <div className="followersDiv">
                    {/* {followersList} */}
                </div>
            </div>
        </div>
    )
}

export default Followers;