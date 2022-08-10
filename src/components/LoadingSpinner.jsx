import React from "react";

// TODO: Importing the CSS File
import "./LoadingSpinner.css";
function LoadingSpinner() {
  return (
    <div className="loading-wrapper">
      <div className="balls">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingSpinner;
