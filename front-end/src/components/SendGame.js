import React from "react";
import NavBar from "./NavBar";

function GamesSent() {
    return (
        <div>
            <NavBar />
            <div>
                <form>Enter Your Address
                    <input placeholder="First Name"></input>
                    <input placeholder="Last Name"></input>
                    <input placeholder="Address Line 1"></input>
                    <input placeholder="Address Line 2 (optional)"></input>
                    <input placeholder="City"></input>
                    <input placeholder="State"></input>
                    <input placeholder="Zip Code"></input>
                    <p>Your shipping label is free!</p>
                    <button>GET MY LABEL</button>
                </form>
                <p>A shipping label has been sent to your email. Print out and use on any box.</p>
            </div>
            <div>
                <h1>Games Sent</h1>
                <ul>
                    <li>Final Fantasy X - PlayStation 4</li>
                    <li>Soul Calibur - GameCube</li>
                    <li>The Legend of Zelda: Windwaker - Wii</li>
                </ul>
            </div>
        </div>
    )
}

export default GamesSent;