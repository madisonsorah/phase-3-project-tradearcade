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

function App() {
  useEffect(() => {
    fetch("http://localhost:9292/users")
    .then(resp => resp.json())
    .then(users => console.log(users))
  }, []);
  const [allTrades, setAllTrades] = useState([])
  const [allGames, setAllGames] = useState([])
  const [allUsers, setAllUSers] = useState([])
  useEffect(() => {
      fetch("http://localhost:9292/trades")
      .then(resp => resp.json())
      .then(trades => setAllTrades(trades))
  },[])
  useEffect(() => {
      fetch("http://localhost:9292/games")
      .then(resp => resp.json())
      .then(games => setAllGames(games))
  },[])
  useEffect(() => {
      fetch("http://localhost:9292/users")
      .then(resp => resp.json())
      .then(users => setAllUSers(users))
  },[])
  const [currentUser, setCurrentUser] = useState(false)
  
  function isLoggedIn() {
    if(currentUser == false) {
      return <Link to="/login" className="navBarLoginLink" currentUser={currentUser} setCurrentUser={setCurrentUser}>LOGIN</Link>
    } else {
      return <Link to="/account" className="navBarAccountLink">ACCOUNT</Link>
    }
}
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn}/>} />
          <Route path="/account" element={<AccountPage isLoggedIn={isLoggedIn} setCurrentUser={setCurrentUser} currentUser={currentUser} allUsers={allUsers} allGames={allGames} allTrades={allTrades} setAllTrades={setAllTrades}/>} />
          <Route path="/login" element={<LoginPage currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn}/>} />
          <Route path="/browsegames" element={<BrowseGames isLoggedIn={isLoggedIn}/>} />
          <Route path="/games/:id" element={<GamePage isLoggedIn={isLoggedIn} currentUser={currentUser}/>} />
          <Route path="/member/:id" element={<MemberPage currentUser={currentUser} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn}/>} />
          <Route path="/members" element={<MemberList isLoggedIn={isLoggedIn}/>} />
          <Route path="/tradehistory" element={<TradeHistory isLoggedIn={isLoggedIn} currentUser={currentUser}/>} />
          <Route path="/tradegame" element={<SendGame isLoggedIn={isLoggedIn} currentUser={currentUser}/>} />
          <Route path="/gamereviews" element={<Reviews isLoggedIn={isLoggedIn} currentUser={currentUser}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
