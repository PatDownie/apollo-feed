import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SongGenerate() {
  const [cat, setCat] = useState({});
  const [form, setForm] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getCat();
  }, []);

  async function getSong() {
    const API = `http://localhost:8080/song?_id=${id}`;
    const res = await axios.get(API);
    setCat(res.data[0]);
  }

  async function postSong() {
    const API = "http://localhost:8080/song";
    const res = await axios.post(API, form);
    console.log(res.data);
  }

  return (
    <div>
      <Header />
      <div className="songGenerate">
        <h2>{song.title}</h2>
        <img className="songImage" src={song.image} alt={song.title} />
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
