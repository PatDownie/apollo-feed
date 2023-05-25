import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Forum.css";
import ForumColumn from "../components/ForumColumn";

export default function Forum() {
  const [forum, setForum] = useState([]);
  const [forumColumn1, setForumColumn1] = useState([]);
  const [forumColumn2, setForumColumn2] = useState([]);
  const [forumColumn3, setForumColumn3] = useState([]);

  useEffect(() => {
    getForum();
  }, []);

  async function getForum() {
    const API = "https://apollo-feed.onrender.com/forum";
    const res = await axios.get(API);
    const forumArray = res.data.reverse();
    const col1Arr = forumArray.filter((_, index) => index % 3 === 0);
    const col2Arr = forumArray.filter((_, index) => (index - 1) % 3 === 0);
    const col3Arr = forumArray.filter((_, index) => (index - 2) % 3 === 0);
    setForum(forumArray);
    setForumColumn1(col1Arr);
    setForumColumn2(col2Arr);
    setForumColumn3(col3Arr);
  }

  return (
    <div className="whole-forum">
      <ForumColumn className={"mobile"} forum={forum} />
      <div className="desktop-forum">
        <ForumColumn className={"desktop 1"} forum={forumColumn1} />
        <ForumColumn className={"desktop 2"} forum={forumColumn2} />
        <ForumColumn className={"desktop 3"} forum={forumColumn3} />
      </div>
    </div>
  );
}
