import React from "react";
import "./style.css";

const CircularProgress = () => {
  return (
    <div className="container">
      <div className="second-progress">
        <div className="circular-progress">
          <span className="progress-value text-white text-xl font-semibold">
            07:58
          </span>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
