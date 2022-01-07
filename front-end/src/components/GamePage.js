import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function GamePage({isLoggedIn}) {
    let { id } = useParams();
    const [game, setGame] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:9292/games/${id}`)
        .then((response) => response.json())
        .then((gameData) => setGame(gameData))

        fetch(`http://localhost:9292/games/${id}/reviews`)
        .then((response) => response.json())
        .then((reviewData) => setReviews(reviewData))

        fetch(`http://localhost:9292/games/${id}/users`)
        .then((response) => response.json())
        .then((userData) => setUsers(userData))
    }, [])

    const renderMembers = users.map((user) => (
        <div>
            <Link to={`/member/${user.id}`}>{user.username}</Link>
        </div>
    ))
    
    const renderReviews = reviews.map((review) => (
        <div>
            <p>"{review.review}" - Rating: {review.score} / 10</p>
        </div>
        ))

    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn} />
            <div className="gamePageDiv">
                <h1>{game.title}</h1>
                <img src={game.image} alt={game.title}></img>
                <h4>{game.platform}</h4>
                <p>{game.description}</p>
                <h2>Reviews</h2>
                {(renderReviews)}
                <h2>Members Who Own</h2>
                {(renderMembers)}
            </div>
            <button onClick={() => (console.log(game))}>Console Log Game</button>
            <button onClick={() => console.log(reviews)}>Console Log Reviews</button>
            <Link to="/browsegames">Back</Link>
        </div>
    )
}

export default GamePage;