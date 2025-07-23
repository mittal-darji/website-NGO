// components/SimpleCards/SimpleCards.js
import React from "react";
import "./Carddetail.css";

import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.jpg";
import card5 from "../../assets/card5.jpg";
import card6 from "../../assets/card6.jpg";
import card7 from "../../assets/card7.jpg";
import card8 from "../../assets/card8.jpg";
import card9 from "../../assets/card9.jpg";
import overteam from "../../assets/overteam.jpg";
import overtea2 from "../../assets/overteam2.jpg";
import overteam3 from "../../assets/overteam3.jpg";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const cards = [
  {
    title: "Health Services",
    image: card1,
  },
  {
    title: "Health Services ",
    image: card2,
  },
  {
    title: "Food Distribution",
    image: card3,
  },
  {
    title: "Health Services",
    image: card4,
  },
  {
    title: "Blood Donation & Health Awareness",
    image: card5,
  },
  {
    title: "Plastic-Free Campaign",
    image: card6,
  },
  {
    title: "Food Distribution ",
    image: card7,
  },
  {
    title: "Blood Donation & Health Awareness",
    image: card8,
  },
  {
    title: "Food Distribution",
    image: card9,
  },
  {
    title: "Food Distribution",
    image: overteam,
  },
  {
    title: "Community Support",
    image: overtea2,
  },
  {
    title: "Tree Plantation",
    image: overteam3,
  },
];

function Carddetail() {
  return (
    <>
      <Header />
      <div className="card-layout">
        <h2>Our Initiatives</h2>
        <div className="card-grid">
          {cards.map((card, index) => (
            <div className="carddetail-card card" key={index}>
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Carddetail;
