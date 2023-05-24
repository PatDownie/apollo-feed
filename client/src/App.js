import React from "react";
import Home from "./pages/Home";
import SongGenerate from "./pages/SongGenerate";
import Forum from "./pages/Forum";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import logo from "./images/apollo-feed-placeholder.png";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <div className="header-container">
            <img src={logo} />
            <div className="header-rh-container">
              <div className="h1-container">
                <h1>Apollo Feed</h1>
              </div>
              <ul className="nav-container">
                <li>
                  <NavLink to={`/`}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={`/feed`}>Feed</NavLink>
                </li>
                <li>
                  <NavLink to={`/forum`}>Forum</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<SongGenerate />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
