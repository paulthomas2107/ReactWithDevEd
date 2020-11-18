import React from "react";
import Tweet from "./tweet";

function App() {
  return (
    <div className="app">
      <Tweet name="Paul" message="I like Apples" likes="22" />
      <Tweet name="Caitlin" message="I like Pears" likes="12" />
      <Tweet name="Rory" message="I like Grapes" likes="383" />
      <Tweet name="Jack" message="I like Chocolate" likes="1077" />
    </div>
  );
}

export default App;
