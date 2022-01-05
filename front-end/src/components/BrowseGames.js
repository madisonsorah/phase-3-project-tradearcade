import React from "react";
import NavBar from "./NavBar"

function BrowseGames() {
    // renderedGames = gameData.map((game) => {
    //     return (
    //         <div>
    //             <img src={game.img}></img>
    //             <h2>{game.title}</h2>
    //             <p>{game.platform}</p>
    //         </div>
    //     )
    // })

    return (
        <div>
            <NavBar />
            <div>
                {/* {renderedGames} */}
            </div>
        </div>
    )
}

export default BrowseGames;