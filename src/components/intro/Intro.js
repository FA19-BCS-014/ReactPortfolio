import React from "react";
import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer" ],
    });
  },[]);
  return (
    <div className="Intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt=" "></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h3>Hi There, i'm</h3>
          <h2>Talha</h2>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt=" "></img>
        </a>
      </div>
    </div>
  );
}

export default Intro;
