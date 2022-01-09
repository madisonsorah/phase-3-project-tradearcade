import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function GamePage({isLoggedIn, currentUser}) {
    let { id } = useParams();
    const [game, setGame] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [users, setUsers] = useState([])
    const [gameReview, setGameReview] = useState()
    const [gameScore, setGameScore] = useState()
    
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

    let data = {
        review: gameReview,
        score: gameScore,
        game_id: id,
        user_id: currentUser.id
    }

    function createReview(e) {
        e.preventDefault()
        const config = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accepts: "application/json",
            },
            body: JSON.stringify(data),
        };

        fetch("http://localhost:9292/reviews", config)
            .then((resp) => resp.json())
            .then((review) => {
                setReviews((reviews) => [...reviews, review])
            })
      }

    const renderMembers = users.map((user) => (
        <div>
            <Link className="gamePageMember" to={`/member/${user.id}`}>{user.username}</Link>
        </div>
    ))
    
    const renderReviews = reviews.map((review) => (
        <div>
            <p>{review.user.username}</p>
            <p>"{review.review}" - Rating: {review.score} / 10</p>
        </div>
        ))

    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn} />
            <div className="gamePageDiv">
                <div className="gamePageFloatContainer">
                    <div className="gamePageFloatLeft">
                    <img className="gamePageImage" src={game.image} alt={game.title}></img>
                    </div>
                    <div className="gamePageFloatRight">
                        <h2>{game.title}</h2>
                        <h4>{game.platform}</h4>
                        <p>{game.description}</p></div>
                </div>
                <h2>Members Who Own</h2>
                {(renderMembers)}
                <h2 className="gamePageReviewsHeader">Reviews</h2>
                {(renderReviews)}
                <form className="gamePageReviewForm"><p className="gamePageReviewFormP">Leave Review</p>
                    <input onChange={(e) => setGameReview(e.target.value)} className="gamePageReviewInput" placeholder="Type review.."></input>
                    <input onChange={(e) => setGameScore(e.target.value)} className="gamePageReviewInput" placeholder="Rating out of 10"></input>
                    <button className="gamePageReviewFormButton" onClick={(e) => createReview(e)}>Add Review</button>
                </form>
            </div>
            <button onClick={() => (console.log(game))}>Console Log Game</button>
            <button onClick={() => console.log(reviews)}>Console Log Reviews</button>
            <Link to="/browsegames">Back</Link>
        </div>
    )
}

export default GamePage;