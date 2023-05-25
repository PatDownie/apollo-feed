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
import { useState } from "react";

export default function App() {
  const [helper, sethelper] = useState(false);

  function helpToggle() {
    sethelper(!helper);
  }

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
          <div className="header-container">
            <img id="logo" src={logo} />
            <div className="header-rh-container">
              <div className="h1-container">
                <h1>Apollo Feed</h1>
              </div>
              <ul className="nav-container">
                <li>
                  <NavLink to={`/`}>
                    <img src={homeicon} alt="home logo"></img>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/feed`}>
                    <img src={feedicon} alt="feed logo"></img>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/forum`}>
                    <img src={forumicon} alt="forum logo"></img>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div id="help-button" onClick={helpToggle}>
          Do you Need help?
        </div>
        {helper && (
          <div className="helper-container">
            <img src={chrisclip} alt="chris as clippy" />
            <div id="helper-button-div">
              <button id="btn1" className="clippy-button" onClick={playCatch}>
                Can you help?
              </button>
              <button id="btn2" className="clippy-button" onClick={playSong}>
                Give me a song!
              </button>
            </div>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<SongGenerate />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
