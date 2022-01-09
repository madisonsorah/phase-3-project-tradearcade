import React, {useState} from "react";
import NavBar from "./NavBar";

function SendGame({isLoggedIn, currentUser}) {
    const [isSubmitted, setSubmitted] = useState(false)
    const [gameTitle, setGameTitle] = useState()
    const [gamePlatform, setGamePlatform] = useState()
    const [gameImageURL, setGameImageURL] = useState()
    const [gameDescription, setGameDescription] = useState()
    // const [gameScore, setGameScore] = useState()
    // const [gameReview, setGameReview] = useState()

    // score: gameScore,
    // review: gameReview,
    console.log(currentUser)

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
        
        setSubmitted((isSubmitted) => !isSubmitted);
      }

    if (isSubmitted) {
        return (
            <div>
                <NavBar isLoggedIn={isLoggedIn}/>
                <div className="sendGameDiv">
                    <div className="sendGameFormDiv">
                        <form><h2 className="sendGameFormEnterGameDetails">Enter Your Game Details</h2>
                            <input onChange={(e) => setGameTitle(e.target.value)} className="sendGameFormInput" placeholder="Game title"></input>
                            <input onChange={(e) => setGamePlatform(e.target.value)} className="sendGameFormInput" placeholder="Game Platform"></input>
                            <input onChange={(e) => setGameImageURL(e.target.value)} className="sendGameFormInput" placeholder="Image URL"></input>
                            <input onChange={(e) => setGameDescription(e.target.value)} className="sendGameFormInput" placeholder="Game Description"></input>
                            <button onClick={(e) => createGame(e)} className="sendGameFormButton">List Game</button>
                            <p className="sendGameFormGameListed">Game listed!</p>
                        </form>
                    </div>
                </div>
            </div>
        )
   } else {
       return (
        <div>
            <NavBar isLoggedIn={isLoggedIn}/>
            <div className="sendGameDiv">
                <div className="sendGameFormDiv">
                    <form><h2 className="sendGameFormEnterGameDetails">Enter Your Game Details</h2>
                        <input onChange={(e) => setGameTitle(e.target.value)} className="sendGameFormInput" placeholder="Game Title"></input>
                        <input onChange={(e) => setGamePlatform(e.target.value)} className="sendGameFormInput" placeholder="Game Platform"></input>
                        <input onChange={(e) => setGameImageURL(e.target.value)} className="sendGameFormInput" placeholder="Image URL"></input>
                        <input onChange={(e) => setGameDescription(e.target.value)} className="sendGameFormInput" placeholder="Game Description"></input>
                        <button onClick={(e) => createGame(e)} className="sendGameFormButton">LIST GAME</button>
                    </form>
                </div>
            </div>
        </div>
       )}
}

export default SendGame;