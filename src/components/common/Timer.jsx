import React from "react";

function Timer({ time }) {
  const renderTime = () => {
    const seconds = String(time % 60).padStart(2, "0");
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };
  return <p>{renderTime()}</p>;
}

export default Timer;
