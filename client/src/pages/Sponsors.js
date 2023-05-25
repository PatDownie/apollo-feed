import React from "react";
import "./Sponsors.css";
import nordAD from "../images/nordAD.png";
import blindAD from "../images/blindAD.png";
import pillsAD from "../images/pillsAD.png";
import responsAD from "../images/responsAD.jpg";
import squadAD from "../images/squadAD.png";
import timAD from "../images/timAD.gif";
import turkeyAD from "../images/turkeyAD.png";
import dmePills from "../audio/dmePills.mp3";

export default function Sponsors() {
  function playPills() {
    new Audio(dmePills).play();
  }

  return (
    <div className="sponsors-container">
      <div className="sponsor-header-container">
        <h4>Our generous sponsors</h4>
      </div>
      <div className="sponsor-container">
        <img className="sponsorAD timAD" src={timAD} />
        <img className="sponsorAD" src={nordAD} />
        <img className="sponsorAD" onClick={playPills} src={pillsAD} />
        <img className="sponsorAD" src={squadAD} />
        <img className="sponsorAD" src={blindAD} />
        <img className="sponsorAD" src={responsAD} />
        <img className="sponsorAD" src={turkeyAD} />
      </div>
    </div>
  );
}
