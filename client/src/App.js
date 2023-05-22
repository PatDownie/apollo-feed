import React from "react";
import Home from "./pages/Home";
import SongGenerate from "./pages/SongGenerate";
import Forum from "./pages/Forum";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>Apollo Feed</h1>
          <h2>For all of your needs</h2>
          <div>
            <img src="https://placehold.co/100" />
            <ul>
              <li>
                <NavLink to={`/home`}>Home</NavLink>
              </li>
              <li>
                <NavLink to={`/feed`}>Feed</NavLink>
              </li>
              <li>
                <NavLink to={`/forum`}>Forum</NavLink>
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
