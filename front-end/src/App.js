import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage'
import AccountPage from './components/AccountPage';
import LoginPage from './components/LoginPage';
import BrowseGames from './components/BrowseGames';
import Followers from './components/Followers';
import Following from './components/Following';
import TradeHistory from './components/TradeHistory';
import SendGame from './components/SendGame';
import Reviews from './components/Reviews';
import WishList from './components/WishList';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="tradearcade" element={<HomePage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="browsegames" element={<BrowseGames />} />
          <Route path="followers" element={<Followers />} />
          <Route path="followlist" element={<Following />} />
          <Route path="tradehistory" element={<TradeHistory />} />
          <Route path="tradegame" element={<SendGame />} />
          <Route path="gamereviews" element={<Reviews />} />
          <Route path="gamewishlist" element={<WishList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
