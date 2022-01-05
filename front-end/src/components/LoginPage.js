import React from "react";
import NavBar from "./NavBar"
import { Link } from "react-router-dom";

function LoginPage() {

    return (
        <div>
            <NavBar />
            <div className="loginPageDiv">
                <h1>Welcome back!</h1>
                <div className="loginPageFormDiv">
                    <form>
                        <input className="loginPageFormInput" placeholder="Email"></input>
                        <input className="loginPageFormInput" placeholder="Password"></input>
                        <button className="loginPageFormButton">Login</button>
                    </form>
                </div>
                <div>
                    <p>Don't have an account? <Link to="/" className="loginPageSignUp">Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;