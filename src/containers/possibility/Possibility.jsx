import React from "react";
import "./possibility.css";
import possibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="id__positioning" id="possibility">
      <div className="gpt3__possibility section__padding">
        <div className="gpt3__possibility-image">
          <img src={possibilityImage} alt="possibility" />
        </div>
        <div className="gpt3__possibility-content">
          <h4>Request Early Access to Get Started</h4>
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam
            culpa blanditiis perspiciatis deleniti, dolorem, ipsum eos minima
            enim, suscipit ipsa reiciendis magni harum impedit fuga nesciunt dolor
            in quod.
          </p>
          <h4>Request Early Access to Get Started</h4>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
