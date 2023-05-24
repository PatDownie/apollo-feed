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
import chrisclip from "./images/chrisClippy.png";
import errorSong from "./audio/myError.wav";
import catchphrase from "./audio/uhm.mp3";

export default function App() {
  function playSong() {
    new Audio(errorSong).play();
  }
  function playCatch() {
    new Audio(catchphrase).play();
  }

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
        <div className="helper-container">
          <div>
            <img src={chrisclip} />
            <button id="btn1" onClick={playCatch}>
              Can you help?
            </button>
            <button id="btn2" onClick={playSong}>
              Give me a song
            </button>
          </div>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/feed" element={<SongGenerate />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
