import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import NavBar from "./NavBar";

function GamePage({isLoggedIn}) {
    let { id } = useParams();
    const [game, setGame] = useState([]);
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
        fetch(`http://localhost:9292/games/${id}`)
        .then((response) => response.json())
        .then((gameData) => setGame(gameData))

        fetch(`http://localhost:9292/games/${id}/reviews`)
        .then((response) => response.json())
        .then((reviewData) => setReviews(reviewData))
    }, [])
    
    // const renderReviews = reviews.map((review) => (
    //     <div>
    //         {console.log(allUsers.find(user => user.id == review.user_id))}
    //         <h4>{allUsers.find(user => user.id == review.user_id).first_name} {allUsers.find(user => user.id == review.user_id).last_name}</h4>
    //         <p>{review.review}</p>
    //     </div>
    //     ))

    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn}/>
            <div>
                <h1>{game.title}</h1>
                <img src={game.image} alt={game.title}></img>
                <h4>{game.platform}</h4>
                <p>{game.description}</p>
                {/* {(renderReviews)} */}
            </div>
            <button onClick={() => (console.log(game))}>Console Log Game</button>
            <button onClick={() => console.log(game.reviews)}>Console Log Reviews</button>
        </div>
    )
}

export default GamePage;