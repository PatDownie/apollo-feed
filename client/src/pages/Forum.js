import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Forum() {
  const [forum, setForum] = useState([]);

  useEffect(() => {
    getForum();
  }, []);

  async function getForum() {
    const API = "http://localhost:8081/forum";
    const res = await axios.get(API);
    setForum(res.data);
    console.log(res.data);
  }

  return (
    <div>
      {forum.map((forumpost) => {
        return (
          <div key={forumpost._id}>
            <h2>{forumpost.title}</h2>
            <p>{forumpost.artist}</p>
            <p>{forumpost.release_date}</p>
            <img src={forumpost.album_art} alt={forumpost.title} />
            <p>{forumpost.post_name}</p>
            <p>{forumpost.forum_post}</p>
          </div>
        );
      })}
    </div>
  );
}
