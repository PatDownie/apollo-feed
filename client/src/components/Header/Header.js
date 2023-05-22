import React from "react";
import "../Header/Header.css";

export default function Header() {
  return (
    <header>
      <h1>Apollo Feed</h1>
      <h2>For all of your needs</h2>
      <div>
        <img src="https://placehold.co/100" />
        <ul>
          <li>Home</li>
          <li>SongGenerate</li>
          <li>Forum</li>
        </ul>
      </div>
    </header>
  );
}
