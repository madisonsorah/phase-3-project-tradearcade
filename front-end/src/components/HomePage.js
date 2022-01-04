import React from "react";
import NavBar from "./NavBar";

function HomePage() {
    return (
        <div>
            <NavBar />
            <div className="homePageDiv">
                <h1>Welcome to TradeArcade</h1>
                <p className="homePageP">Register</p>
                <div className="homePageFormDiv">
                    <form>
                        <input className="homePageFormInput" placeholder="First Name"></input>
                        <input className="homePageFormInput" placeholder="Last Name"></input>
                        <input className="homePageFormInput" placeholder="Username"></input>
                        <input className="homePageFormInput" placeholder="Email"></input>
                        <input className="homePageFormInput" placeholder="Password"></input>
                        <button className="homePageFormButton">Create Account</button>
                    </form>
                </div>
                <div>
                    <p>Already have an account?</p>
                    <a>Login</a>
                </div>
            </div>
        </div>
    )
}

export default HomePage;