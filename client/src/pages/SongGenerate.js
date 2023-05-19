import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SongGenerate() {
  const [song, setSong] = useState({});
  const [form, setForm] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getCat();
  }, []);

  async function getSong() {
    const API = `http://api.genius.com/songs/${id}access_token=${DATABASE_API_KEY}`;
    const res = await axios.get(API);
    setCat(res.data[0]);
  }

  async function postSong() {
    const API = `http://api.genius.com/songs/${id}access_token=${DATABASE_API_KEY}`;
    const res = await axios.post(API, form);
    console.log(res.data);
  }

  return (
    <div>
      <Header />
      <div className="songGenerate">
        <h2>{song.full_title}</h2>
        <img className="songImage" src={song.song_art_image_thumbnail_url} alt={song.full_title} />
        <p>{beast.description}</p>
      </div>
      <div className="songButton">
        <p>Random Button</p>
      </div>
      <div className="formData">
        <h3>Comments</h3>
        <p>{formid.description}</p>
        <form onSubmit={postSong}>
          <input name="Comment" placeholder="What did you think of this song?" />
        </form>
      </div>
      <Footer />
    </div>
  );
}
