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
            <div className="homePageFooter">
                    <ul className="homePageNewGamesUl">
                        <h2 className="homePageNewGamesH2">Newly Listed Games</h2>
                        <li className="homePageNewGamesLi">
                            <Link to="/browsegames">
                                <img className= "homePageNewGamesImage" src="https://media.gamestop.com/i/gamestop/10177032/FINAL-FANTASY-VII-Remake---PlayStation-4?$pdp2x$" alt="FFVII"></img>
                            </Link>
                            <p className="homePageNewGamesTitle">FINAL FANTASY VII Remake</p>
                        </li>
                        <li className="homePageNewGamesLi">
                            <Link to="/browsegames">
                                <img className= "homePageNewGamesImage" src="https://media.gamestop.com/i/gamestop/11108375/Halo-Infinite---Xbox-Series-X?$pdp2x$" alt="Halo"></img>
                            </Link>
                            <p className="homePageNewGamesTitle">Halo Infinite</p>
                        </li>
                        <li className="homePageNewGamesLi">
                            <Link to="/browsegames">
                                <img className= "homePageNewGamesImage" src="https://media.gamestop.com/i/gamestop/11120692/Pokemon-Brilliant-Diamond---Nintendo-Switch?$pdp2x$" alt="Pokemon"></img>
                            </Link>
                            <p className="homePageNewGamesTitle">Pokemon Brilliant Diamond</p>
                        </li>
                        <li className="homePageNewGamesLi">
                            <Link to="/browsegames">
                                <img className= "homePageZeldaImage" src="https://media.gamestop.com/i/gamestop/10141904/The-Legend-of-Zelda-Breath-of-the-Wild---Nintendo-Switch?$pdp2x$" alt="Zelda"></img>
                            </Link>
                            <p className="homePageNewGamesTitle">The Legend of Zelda: Breath of the Wild</p>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default LoginPage;