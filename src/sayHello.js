import React from "react";

function Hello() {
  const sayHello = () => {
    console.log("Hello again, Paul.");
  };
  return (
    <div>
      <h1>This is Hello</h1>
      <button onClick={sayHello}>Say Hello</button>
    </div>
  );
}

export default Hello;
