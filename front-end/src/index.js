import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import HomePage from './components/HomePage';
import AccountPage from './components/AccountPage';
import LoginPage from './components/LoginPage';
import BrowseGames from './components/BrowseGames';
import Followers from './components/Followers';
import Following from './components/Following';
import GamesBorrowed from './components/GamesBorrowed';
import GamesSent from './components/GamesSent';
import Reviews from './components/Reviews';
import WishList from './components/WishList';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="tradearcade" element={<HomePage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="browsegames" element={<BrowseGames />} />
        <Route path="followers" element={<Followers />} />
        <Route path="followlist" element={<Following />} />
        <Route path="tradehistory" element={<GamesBorrowed />} />
        <Route path="tradegame" element={<GamesSent />} />
        <Route path="gamereviews" element={<Reviews />} />
        <Route path="gamewishlist" element={<WishList />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
