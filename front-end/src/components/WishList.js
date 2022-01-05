import React from "react";
import NavBar from "./NavBar"

function WishList() {
    // wishListGames = gameData.map((game) => {
    //     // return (
    //     //     <div className="wishListGame">
    //     //         <button>★</button>
    //     //         <img className="wishListGameImg" alt="game" src={game.image}></img>
    //     //         <h3 className="wishListGameTitle">{game.title}</h3>
    //     //         <p className="wishListGameSystem">{game.system}</p> 
    //     //     </div>
    //     // )
    //     })

    return (
        <div>
            <NavBar />
            <div className="wishListContainer">
                <h1 className="wishListHeader">My Wish List</h1>
                <div className="wishListDiv">
                    {/* {wishListGames} */}
                </div>
            </div>
        </div>
    )
}

export default WishList;