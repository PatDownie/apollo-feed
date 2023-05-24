import React from "react";
import Home from "./pages/Home";
import SongGenerate from "./pages/SongGenerate";
import Forum from "./pages/Forum";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import logo from "./images/apollo-feed-placeholder.png";
import homeicon from "./images/home.png";
import feedicon from "./images/feed.png";
import forumicon from "./images/forum.png";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <img src={logo} />
          <div className="header-container">
            <h1>Apollo Feed</h1>
            <ul className="nav-container">
              <li>
                <NavLink to={`/home`}>
                  <img src={homeicon}></img>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/feed`}>
                  <img src={feedicon}></img>
                </NavLink>
              </li>
              <li>
                <NavLink to={`/forum`}>
                  <img src={forumicon}></img>
                </NavLink>
              </li>
            </ul>
          </div>
        </header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/feed" element={<SongGenerate />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
