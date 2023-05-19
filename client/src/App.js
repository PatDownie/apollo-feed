import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "../src/pages/Home";
import SongGenerate from "../src/pages/SongGenerate";
import Forum from "../src/pages/Forum";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [song, setSong] = useState([]);
  const [form, setForm] = useState({
    id: "",
    title: "",
    formid: "",
  });

  useEffect(() => {
    getSong();
  }, []);

  async function getSong() {
    const API = "http://localhost:8080/song";
    const res = await axios.get(API);
    setSong(res.data);
    console.log(res.data);
  }

  async function postSong() {
    const API = "http://localhost:8080/song";
    const res = await axios.post(API, form);
    console.log(res.data);
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Songs</h1>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/SongGenerate" element={<SongGenerate />} />
          <Route path="/Forum" element={<Forum />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
