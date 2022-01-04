import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div>
            <NavBar />
            <div className="homePageDiv">
                <h1>Welcome to TradeArcade</h1>
                <p className="homePageP">Sign up to trade games with thousands of community members.</p>
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
                    <p>Already have an account? <Link to="/login" className="homePageLogin">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;