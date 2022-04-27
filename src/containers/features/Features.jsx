import React from "react";
import { Feature } from "../../components";
import "./features.css";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam culpa blanditiis deleniti, dolorem,ipsum eos minim",
  },
  {
    title: "Become the tended active",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam culpa blanditiis deleniti, dolorem,ipsum eos minim",
  },
  {
    title: "MEssage and Instant Response",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam culpa blanditiis deleniti, dolorem,ipsum eos minim",
  },
  {
    title: "Really Efficient and fast System",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam culpa blanditiis deleniti, dolorem,ipsum eos minim",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into The
          Future Today & Make it Happen
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
