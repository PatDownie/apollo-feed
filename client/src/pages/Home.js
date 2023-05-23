import React from "react";
import "./Home.css";
import image from "../images/musicback.jpg";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome</h1>
      <p>Welcome to our React.js project, a random music generator that integrates seamlessly with an API and MongoDB. </p>
      <p>Created by Patrick and Ross</p>
      <a href="/feed">
        <button className="button">Show me a song!</button>
      </a>
    </div>
  );
}
