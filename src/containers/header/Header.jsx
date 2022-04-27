import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Laborum dolor est esse Lorem laboris ad exercitation duis in. Occaecat
          minim nisi excepteur id est Lorem aliquip labore deserunt sint.
          Laborum exercitation eiusmod do ut reprehenderit. Pariatur fugiat sint
          dolor non cupidatat incididunt tempor aliquip cillum.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address"></input>
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,500 people requested access to visit in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Header;
