import React from "react";
import NavBar from "./NavBar";

function HomePage() {
    return (
        <div>
              <NavBar />
            <div>
                <h1>Welcome to TradeArcade!</h1>
                <p>Register</p>
                <form></form>
                <div>
                    <p>Already have an account?</p>
                    <a>Login</a>
                </div>
            </div>
        </div>
    )
}

export default HomePage;