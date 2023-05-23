import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Forum.css";

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
    <div className="whole-forum">
      {forum.map((forumpost) => {
        return (
          <div className="forum-post" key={forumpost._id}>
            <div className="post-header">
              <img src={forumpost.album_art} alt={forumpost.title} />
              <div className="post-header-text">
                <p>
                  <span className="username">{forumpost.poster_name}</span> has listened to {forumpost.title} by {forumpost.artist}
                </p>
              </div>
            </div>
            <div className="post-body">
              <p>"{forumpost.forum_post}"</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
