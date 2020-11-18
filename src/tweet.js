import React from "react";
import "./App.css";

function Tweet({ name, message, likes}) {
  return (
    <div className="tweet">
      <h3>{name}</h3>
      <p>{message}</p>
      <h2>Number of likes: {likes}</h2>
    </div>
  );
}

export default Tweet;
