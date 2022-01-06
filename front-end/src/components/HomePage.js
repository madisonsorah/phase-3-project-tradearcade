import React, {useState, useEffect} from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function HomePage({currentUser, setCurrentUser, isLoggedIn}) {
    const userData = "http://localhost:9292/users"
    const [allUsers, setAllUsers] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    useEffect(() => {
        fetch(userData)
        .then(resp => resp.json())
        .then(users => setAllUsers(users))
    },[])


    let data = {
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        password: password
    }
    function createAccount(e) {
        e.preventDefault()
        const config = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accepts: "application/json",
            },
            body: JSON.stringify(data),
        };
        console.log(data)
        const matchingEmail = allUsers.find(u => u.email == email)
        console.log(matchingEmail)
        if(matchingEmail == undefined) {
            //If there is no email match, and the inputted email is unique, this will run
            fetch(userData, config)
            .then((resp) => resp.json())
            .then((userData) => setCurrentUser(userData))
            .then(console.log(currentUser))
        }else{
            console.log("email already exists!")
        }
      }
    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn} />
            <div className="homePageDiv">
                <h1>Welcome to TradeArcade</h1>
                <p className="homePageP">Sign up to trade games with thousands of community members.</p>
                <div className="homePageFormDiv">
                    <form>
                        <input className="homePageFormInput" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}></input>
                        <input className="homePageFormInput" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}></input>
                        <input className="homePageFormInput" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                        <input className="homePageFormInput" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                        <input className="homePageFormInput" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                        <button className="homePageFormButton" onClick={(e) => createAccount(e)}>Create Account</button>
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