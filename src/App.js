import React, { useState } from "react";
import Tweet from "./tweet";

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  const [users, setUsers] = useState([
    {
      name: "Paul",
      message: "I like Sushi",
      likes: 202,
    },
    {
      name: "Caitlin",
      message: "I like Fruit",
      likes: 722,
    },
    {
      name: "Rory",
      message: "I like Man Utd.",
      likes: 12722,
    },
  ]);

  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} likes={user.likes} />
      ))}
    </div>
  );
}

export default App;
