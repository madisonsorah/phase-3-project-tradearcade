import React, {useState, useEffect} from "react";
import NavBar from "./NavBar"
import {Link, useNavigate} from "react-router-dom";
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
                <h2 className="homePageNewGamesH2">Newly Listed Games</h2><Link className="homePageNewGamesLink" to="/browsegames"><p className="homePageNewGamesLinkP">See Full List</p></Link>
                <ul className="homePageNewGamesUl">
                    <li className="homePageNewGamesLi">
                        <Link to="/browsegames">
                            <img className="homePageNewGamesImage" src="https://m.media-amazon.com/images/I/61F14y0nXAS._AC_SX466_.jpg" alt="FFVII"></img>
                        </Link>
                        <p className="homePageNewGamesTitle">FINAL FANTASY VII Remake</p>
                    </li>
                    <li className="homePageNewGamesLi">
                        <Link to="/browsegames">
                            <img className= "homePageNewGamesImage" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6414/6414163_sd.jpg" alt="Halo"></img>
                        </Link>
                        <p className="homePageNewGamesTitle">Halo Infinite</p>
                    </li>
                    <li className="homePageNewGamesLi">
                        <Link to="/browsegames">
                            <img className= "homePageNewGamesImage" src="https://cdn.shopify.com/s/files/1/0027/8298/6309/products/pokemon_brilliant_diamond_box_art.jpg?v=1637159188" alt="Pokemon"></img>
                        </Link>
                        <p className="homePageNewGamesTitle">Pokemon Brilliant Diamond</p>
                    </li>
                    <li className="homePageNewGamesLi">
                        <Link to="/browsegames">
                            <img className= "homePageNewGamesImage" src="https://i.redd.it/jhp467u1f7ay.jpg" alt="Zelda"></img>
                        </Link>
                        <p className="homePageNewGamesTitle">The Legend of Zelda: Breath of the Wild</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LoginPage;