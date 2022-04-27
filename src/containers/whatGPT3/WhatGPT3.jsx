import React from "react";
import { Feature } from "../../components";
import "./whatGPT3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam culpa blanditiis perspiciatis deleniti, dolorem, ipsum eos minima enim, suscipit ipsa reiciendis magni harum impedit fuga nesciunt dolor in quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam culpa blanditiis perspiciatis deleniti, dolorem."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit, iti, dolorem, ipsum eos minima enim, suscipit."
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem ullam culpa blanditiis deleniti, dolorem,ipsum eos minim"
        />
        <Feature
          title="Education"
          text="Perspiciatis, dolorem, ipsum eos minima enim, suscipit ipsa reiciendis magni harum impedit fuga nesciunt dolor in quod."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
