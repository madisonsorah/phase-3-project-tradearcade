import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";


function NavBar({currentUser, setCurrentUser, isLoggedIn, loggedIn, setLoggedIn}) {
    useEffect(isLoggedIn,[])
    // function isLoggedIn() {
    //     if (currentUser == {}) {
    //         setLoggedIn(false)
    //     } else {
    //         setLoggedIn(true)
    //         console.log(currentUser)
    //     }}
    
    return (
        <div className="mainNavDiv">
            <ul className="navBarUl">
                <li className="navBarLi">TradeArcade</li>
                <Link to="/browsegames" className="navBarLink">Browse Games</Link>
                {loggedIn ? <Link to="/account" className="navBarLink">Account</Link> : <Link to="/login" className="navBarLink" currentUser={currentUser} setCurrentUser={setCurrentUser}>Login</Link>}
                
            </ul>
        </div>
    )
    }
export default NavBar;