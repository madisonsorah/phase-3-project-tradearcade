import React, {useState, useEffect} from "react";
import NavBar from "./NavBar"; 
import { Link, useNavigate } from "react-router-dom";
import tradearcademachine from "../images/tradearcademachine.png"

function HomePage({currentUser, setCurrentUser, isLoggedIn}) {
    const userData = "http://localhost:9292/users"
    const [allUsers, setAllUsers] = useState()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();

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
            navigate("/account", { replace: true })
        }else{
            console.log("email already exists!")
        }
      }
    return (
        <div>
            <NavBar isLoggedIn={isLoggedIn} />
            <div className="homePageDiv">
                <h1 className="homePageWelcome">Welcome to TradeArcade</h1>
                <p className="homePageP">Sign up to trade games with thousands of community members.</p>
                <div className="homePageFloatContainer">
                    <div className="homePageFloatLeft">
                        <img className="homePageMachineImage" src={tradearcademachine}></img>
                    </div>
                    <div className="homePageFloatRight">
                        <form className="homePageForm">
                            <input className="homePageFormInput" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}></input>
                            <input className="homePageFormInput" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}></input>
                            <input className="homePageFormInput" placeholder="Username" onChange={(e) => setUsername(e.target.value)}></input>
                            <input className="homePageFormInput" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>
                            <input className="homePageFormInput" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                            <button className="homePageFormButton" onClick={(e) => createAccount(e)}>Create Account</button>
                        </form>
                    </div>
                    <div>
                        <p className="homePageHaveAccount">Already have an account? <Link to="/login" className="homePageLogin">Login</Link></p>
                    </div>
                </div>
            </div>
            <div className="homePageFooter">
                <h2 className="homePageNewGamesH2">Newly Listed Games</h2><Link className="homePageNewGamesLink" to="/browsegames"><p className="homePageNewGamesLinkP">See Full List</p></Link>
                <ul className="homePageNewGamesUl">
                    <li className="homePageNewGamesLi">
                        <Link to="/browsegames">
                            <img className= "homePageFFVIIImage" src="https://m.media-amazon.com/images/I/61F14y0nXAS._AC_SX466_.jpg" alt="FFVII"></img>
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
                            <img className= "homePagePokemonImage" src="https://cdn.shopify.com/s/files/1/0027/8298/6309/products/pokemon_brilliant_diamond_box_art.jpg?v=1637159188" alt="Pokemon"></img>
                        </Link>
                        <p className="homePageNewGamesTitle">Pokemon Brilliant Diamond</p>
                    </li>
                    <li className="homePageNewGamesLi">
                        <Link to="/browsegames">
                            <img className= "homePageZeldaImage" src="https://i.redd.it/jhp467u1f7ay.jpg" alt="Zelda"></img>
                        </Link>
                        <p className="homePageNewGamesTitle">The Legend of Zelda: Breath of the Wild</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HomePage;