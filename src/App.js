import React from "react";
import { nanoid } from "nanoid";
import "./App.css";
import './bootstrap.min.css';
import Card from "./components/Card";


const Cards = [
  {
    img: "https://via.placeholder.com/300x200/000000/FFFFFF",
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    link: "#",
    linkTitle: "Go somewhere"
  },
  {
    title: "Special title treatment",
    text: "With supporting text below as a natural lead-in to additional content.",
    link: "#",
    linkTitle: "Go somewhere"
  },
];

function App() {
  return (
    <div className="App">
      {Cards.map((card) => (
        <Card key={nanoid()} {...card}>
          {card.img ? (
            <img src={card.img} className="card-img-top" alt="..." />
          ) : null}
        </Card>
      ))}
    </div>
  );
}

export default App;