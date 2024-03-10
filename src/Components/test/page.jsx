import React from "react";
import "./chumma.css";

const Page = () => {
  const percentage = 65;
  return (
    <div className="skill">
      <div className="outer">
        <div className="inner">
          <div id="number">65%</div>
        </div>
      </div>
      <svg
        className="circle-svg"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ transform: `rotate(${-85}deg)` }}
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stopColor="red" />
            <stop offset="100%" stopColor="white" />

          </linearGradient>
        </defs>
        <circle cx="80" cy="80" r="70" stroke-linecap="round" />
      </svg>
    </div>
  );
};

export default Page;
