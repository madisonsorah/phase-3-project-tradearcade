import React from "react";
import NavBar from "./NavBar";

function SendGame({isLoggedIn}) {
    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn}/>
            <div className="sendGameDiv">
                <div className="sendGameFormDiv">
                    <form><p className="sendGameFormEnterAddress">Enter Your Address</p>
                        <input className="sendGameFormInput" placeholder="First Name"></input>
                        <input className="sendGameFormInput" placeholder="Last Name"></input>
                        <input className="sendGameFormInput" placeholder="Address Line 1"></input>
                        <input className="sendGameFormInput" placeholder="Address Line 2 (optional)"></input>
                        <input className="sendGameFormInput" placeholder="City"></input>
                        <input className="sendGameFormInput" placeholder="State"></input>
                        <input className="sendGameFormInput" placeholder="Zip Code"></input>
                        <p className="sendGameFormFreeLabel">Your shipping label is free!</p>
                        <button className="sendGameFormButton">GET MY LABEL</button>
                    </form>
                    <p>A shipping label has been sent to your email. Print out and use on any box.</p>
                </div>
            </div>
        </div>
    )
}

export default SendGame;