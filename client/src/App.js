import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import SongGenerate from "./pages/SongGenerate";
// import Forum from "./pages/Forum";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Songs</h1>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/SongGenerate" element={<SongGenerate />} />
          {/* <Route path="/Forum" element={<Forum />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
