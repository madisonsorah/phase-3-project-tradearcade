import React, {useState, useEffect} from "react";

function GamePage({displayedGame, setDisplayedGame, allUsers}) {
    // const reviewer = allUsers.find(user => user.id == review.id)
    const renderReviews = 
    displayedGame.reviews.map((review) => (
        <div>
             {console.log(allUsers.find(user => user.id == review.user_id))}
             <h4>{allUsers.find(user => user.id == review.user_id).first_name} {allUsers.find(user => user.id == review.user_id).last_name}</h4>
            <p>{review.review}</p>
        </div>
        ))

    return (
        <div>
            <div>
                <h1>{displayedGame.title}</h1>
                <img src={displayedGame.image} alt={displayedGame.title}></img>
                <h4>{displayedGame.platform}</h4>
                <p>{displayedGame.description}</p>
                {( renderReviews)}
            </div>
            <button onClick={() => (setDisplayedGame(false))}>Back</button>
            <button onClick={() => (console.log(displayedGame))}>ConsoleLogGame</button>
            <button onClick={() => console.log(displayedGame.reviews)}>ConsoleLogReviews</button>
        </div>
    )
}

export default GamePage;