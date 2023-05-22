import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

  // useEffect(() => {
  //   getSong();
  // }, []);

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
      <div className="songGenerate">
        <h2>{song.title}</h2>
        <p>{song.artist}</p>
        <p>{song.release_date}</p>
        <img className="songImage" src={song.album_art} alt={song.title} />
      </div>
      <div className="songButton">
        <button onClick={getSong}>Random Button</button>
      </div>
      <div className="formData">
        <h3>Review</h3>
        <form onSubmit={postForum}>
          <input name="poster_name" type="text" placeholder="Whats your name?" onChange={handleChange} value={form.poster_name} />
          <input name="forum_post" type="text" placeholder="What did you think of this song?" onChange={handleChange} value={form.forum_post} />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
}
