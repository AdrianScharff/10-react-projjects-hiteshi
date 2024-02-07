import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card username="Hitesh" />
      <Card
        username="Json"
        post="Staff"
        img="https://images.pexels.com/photos/18096595/pexels-photo-18096595/free-photo-of-music-on-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <Card img="https://images.pexels.com/photos/3532554/pexels-photo-3532554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card />
    </>
  );
}

export default App;
