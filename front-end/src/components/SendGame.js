import React, {useState} from "react";
import NavBar from "./NavBar";

function SendGame({isLoggedIn, currentUser}) {
    const [gameTitle, setGameTitle] = useState()
    const [gamePlatform, setGamePlatform] = useState()
    const [gameImageURL, setGameImageURL] = useState()
    const [gameDescription, setGameDescription] = useState()
    // const [gameScore, setGameScore] = useState()
    // const [gameReview, setGameReview] = useState()

    // score: gameScore,
    // review: gameReview,

    let data = {
        title: gameTitle,
        platform: gamePlatform,
        image: gameImageURL,
        description: gameDescription,
        user_id: currentUser.id
    }

    function createGame(e) {
        e.preventDefault()
        const config = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accepts: "application/json",
            },
            body: JSON.stringify(data),
        };

        fetch("http://localhost:9292/games", config)
            .then((resp) => resp.json())
            .then((game) => console.log(game))
      }
    
    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn}/>
            <div className="sendGameDiv">
                <div className="sendGameFormDiv">
                    <form><p className="sendGameFormEnterAddress">Enter Your Game Details</p>
                        <input onChange={(e) => setGameTitle(e.target.value)} className="sendGameFormInput" placeholder="Game title"></input>
                        <input onChange={(e) => setGamePlatform(e.target.value)} className="sendGameFormInput" placeholder="Game Platform"></input>
                        <input onChange={(e) => setGameImageURL(e.target.value)} className="sendGameFormInput" placeholder="Image URL"></input>
                        <input onChange={(e) => setGameDescription(e.target.value)} className="sendGameFormInput" placeholder="Game Description"></input>
                        {/* <input className="sendGameFormInput" placeholder="Add game rating (optional)"></input>
                        <input className="sendGameFormInput" placeholder="Add a Review (optional)"></input> */}
                        <button onClick={(e) => createGame(e)} className="sendGameFormButton">LIST GAME</button>
                    </form>
                    <p className="sendGameFormFreeLabel">Game listed!</p>
                </div>
            </div>
        </div>
    )
}

export default SendGame;