import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import HomePage from './components/HomePage'
import AccountPage from './components/AccountPage';
import LoginPage from './components/LoginPage';
import BrowseGames from './components/BrowseGames';
import GamePage from './components/GamePage';
import MemberPage from './components/MemberPage';
import MemberList from './components/MemberList';
import TradeHistory from './components/TradeHistory';
import SendGame from './components/SendGame';
import Reviews from './components/Reviews';
import WishList from './components/WishList';


function App() {
  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then(resp => resp.json())
    .then(users => console.log(users))
  }, []);

  const [currentUser, setCurrentUser] = useState(false)
  
  function isLoggedIn() {
    if(currentUser == false) {
      return <Link to="/login" className="navBarLink" currentUser={currentUser} setCurrentUser={setCurrentUser}>Login</Link>
    } else {
      return <Link to="/account" className="navBarLink">Account</Link>
    }
}
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn}/>} />
          <Route path="/account" element={<AccountPage isLoggedIn={isLoggedIn}/>} />
          <Route path="/login" element={<LoginPage currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn}/>} />
          <Route path="/browsegames" element={<BrowseGames isLoggedIn={isLoggedIn}/>} />
          <Route path="/games/:id" element={<GamePage isLoggedIn={isLoggedIn}/>} />
          <Route path="/member/:id" element={<MemberPage currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn}/>} />
          <Route path="/members" element={<MemberList isLoggedIn={isLoggedIn}/>} />
          <Route path="/tradehistory" element={<TradeHistory isLoggedIn={isLoggedIn} currentUser={currentUser}/>} />
          <Route path="/tradegame" element={<SendGame isLoggedIn={isLoggedIn}/>} />
          <Route path="/gamereviews" element={<Reviews isLoggedIn={isLoggedIn}/>} />
          <Route path="/gamewishlist" element={<WishList isLoggedIn={isLoggedIn}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
