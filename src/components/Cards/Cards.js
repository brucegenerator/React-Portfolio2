import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className="cards">
      <h1>Top Apps!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items"> 
            <CardItem
              src="images/burger-logo.png"
              text="Order a burger with the burger builder app!"
              label="Hungry?"
              url="https://peaceful-river-21684.herokuapp.com/"
            />
            <CardItem
              src="images/brain.jpg"
              text="Play ClickyGame and test your memory!"
              label="Bored?"
              url="https://floating-headland-07846.herokuapp.com/"
            />
            <CardItem
              src="images/npr-logo.png"
              text="Catch up on the latest news articles from NPR"
              label="Need Info?"
              url="https://floating-headland-07846.herokuapp.com/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
