import React, {useState, useEffect} from "react";
import NavBar from "./NavBar"
import { Link, useNavigate } from "react-router-dom";
import { findDOMNode } from "react-dom";
import tradearcadeinvader from "../images/tradearcadeinvader.png"

function LoginPage({currentUser, setCurrentUser, isLoggedIn}) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [allUsers, setAllUsers] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:9292/users")
        .then(resp => resp.json())
        .then(users => handleFetch(users))
    },[])

    function handleFetch(users) {
        setAllUsers(users)
    }

    function handleLogin(e) {
        e.preventDefault()
        // console.log(email)
        // console.log(password)
        const validEmails = (allUsers.filter((user) => user.email == email))
        console.log(validEmails)
        const correctPassword = validEmails.map(a => a.password)
        console.log(correctPassword)
        if (password == correctPassword){
            console.log("Logged In!")
            setCurrentUser(validEmails[0])
            navigate("/account", { replace: true });
        } else {
            console.log("Incorrect Credentials!")
        }
        isLoggedIn()
    }
    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn}/>
            <div className="loginPageDiv">
                <h1 className="loginPageH1">Welcome back!</h1>
                <img className="loginPageImage" src={tradearcadeinvader}></img>
                <div className="loginPageFormDiv">
                    <form>
                        <input className="loginPageFormInput" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                        <input className="loginPageFormInput" placeholder="Password"onChange={(e) => setPassword(e.target.value)}></input>
                        <button className="loginPageFormButton" onClick={(e) => handleLogin(e)}>Login</button>
                    </form>
                </div>
                <div>
                    <p className="loginPageP">Don't have an account? <Link to="/" className="loginPageSignUp">Sign up</Link></p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;