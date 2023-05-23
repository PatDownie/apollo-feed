import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SongGenerate.css";

export default function SongGenerate() {
  const [song, setSong] = useState([]);
  const [form, setForm] = useState({
    song_id: NaN,
    title: "",
    artist: "",
    release_date: "",
    album_art: "",
    poster_name: "",
    forum_post: "",
  });

  async function getSong() {
    const API = "http://localhost:8081/song";
    const res = await axios.get(API);
    setSong(res.data);
    setForm({ ...form, song_id: res.data.song_id, title: res.data.title, artist: res.data.artist, release_date: res.data.release_date, album_art: res.data.album_art });
    console.log(res.data);
  }

  async function postForum() {
    const API = "http://localhost:8081/forum";
    const res = await axios.post(API, form);
    console.log(res.data);
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  return (
    <div>
      <div className="song-container">
        <img src={song.album_art} alt={song.title} />
        <div className="songInfo">
          <h2>{song.title}</h2>
          <p>By, {song.artist}</p>
          <p>Released: {song.release_date}</p>
        </div>
      </div>
      <div className="form-container">
        <form onSubmit={postForum}>
          <textarea name="forum_post" type="text" placeholder="What did you think of this song?" onChange={handleChange} value={form.forum_post} maxlength="700" rows="5" />
          <input name="poster_name" type="text" placeholder="Whats your name?" onChange={handleChange} value={form.poster_name} maxlength="50" />
          <input className="button" type="submit" />
        </form>
      </div>
      <div className="flex-container">
        <button className="button" onClick={getSong}>
          Show me another Song
        </button>
      </div>
    </div>
  );
}
