import axios from "axios";
import { useState } from "react";
import "./SongGenerate.css";

export default function SongGenerate() {
  const [song, setSong] = useState([]);
  const [displaySong, setDisplaySong] = useState(false);
  const [songButtonText, setSongButtonText] = useState("Find me a song!");
  const [songButtonClass, setSongButtonClass] = useState("normal");
  const [forumButtonActive, setForumButtonActive] = useState(true);
  const [forumButtonText, setForumButtonText] = useState("Post to forum");

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
    setSongButtonText("Fetching fresh jams");
    setSongButtonClass("loading");
    const API = "https://apollo-feed.onrender.com/song";
    const res = await axios.get(API);
    setSongButtonText("Find me a song!");
    setSongButtonClass("normal");
    setDisplaySong(true);
    setSong(res.data);
    setForm({ ...form, song_id: res.data.song_id, title: res.data.title, artist: res.data.artist, release_date: res.data.release_date, album_art: res.data.album_art });
    setForumButtonActive(true);
    setForumButtonText("Post to Forum");
  }

  async function postForum(event) {
    event.preventDefault();
    if (form.poster_name && form.forum_post && form.title && forumButtonActive === true) {
      setForumButtonActive(false);
      setForumButtonText("Posting...");
      const API = "https://apollo-feed.onrender.com/forum";
      await axios.post(API, form);
      setForm({
        song_id: NaN,
        title: "",
        artist: "",
        release_date: "",
        album_art: "",
        poster_name: "",
        forum_post: "",
      });
      setForumButtonText("Posted!");
    }
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <div className="feed-body-container">
      {displaySong && (
        <div className="song-and-form-container">
          <div className="song-container">
            <img src={song.album_art} alt={song.title} />
            <div className="songInfo">
              <h2>{song.title}</h2>
              <p>By: {song.artist}</p>
              <p>Released: {song.release_date}</p>
            </div>
          </div>

          <div className="form-container">
            <form onSubmit={postForum}>
              <textarea name="forum_post" type="text" placeholder="What did you think of this song?" onChange={handleChange} value={form.forum_post} maxLength="700" rows="5" />
              <input name="poster_name" type="text" placeholder="Whats your name?" onChange={handleChange} value={form.poster_name} maxLength="50" />
              <input className="button" type="submit" value={forumButtonText} />
            </form>
          </div>
        </div>
      )}
      <div className="show-song-button-container">
        <button className={`button ${songButtonClass}`} onClick={getSong}>
          {songButtonText}
        </button>
      </div>
      {/* <div className="advert-container">
        <img src={advert} onClick={play1} />
      </div> */}
    </div>
  );
}
