import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";

function Reviews({isLoggedIn, currentUser}) {
    const [reviewsList, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/users/${currentUser.id}/reviews`)
        .then((response) => response.json())
        .then((reviewData) => setReviews(reviewData))
    }, [])

    function handleDelete(id) {
        let updatedReviewList = reviewsList.filter((review) => review.id !== id)
        setReviews(updatedReviewList);
        const config = {
          method: "DELETE",
        }
        fetch(`http://localhost:9292/reviews/${id}`, config)
      };


    const renderReviews = reviewsList.map((review) => (
        <div className="reviewsReview">
            <p className="reviewsP">{review.game.title}</p>
            <p>"{review.review}" - Rating: {review.score} / 10</p>
            <button className="reviewsDeleteButton" onClick={() => handleDelete(review.id)}>Delete Review</button>
        </div>
        ))

    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn}/>
            <div className="reviewsDiv">
                <h1 className="reviewsHeader">My Game Reviews</h1>
                <div className="reviewsContainer">
                    {renderReviews}
                </div>
            </div>
        </div>
    )
}

export default Reviews;