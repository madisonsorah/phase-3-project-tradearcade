import React from "react";
import NavBar from "./NavBar"

function Following() {
    return (
        <div>
            <NavBar />
            <div>
                <h1>My Follow List</h1>
                <div className="followingDiv">
                    {/* {followingList} */}
                </div>
            </div>
        </div>
    )
}

export default Following;