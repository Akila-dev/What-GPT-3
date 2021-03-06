import React from "react";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => {
  return (
    <div className="id__positioning" id="blog">
      <div className="gpt3__blog section__padding">
        <div className="gpt3__blog-heading">
          <h1 className="gradient__text">
            Check out our
            <br />
            Blog, filled with value-rich Contents
          </h1>
        </div>
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article
              imgUrl={blog01}
              date="April 18, 2022"
              title="GPT-3 and Open AI are the future. Let us explore how them!"
            />
          </div>
          <div className="gpt3__blog-container_groupB">
            <Article
              imgUrl={blog02}
              date="April 18, 2022"
              title="GPT-3 and Open AI are the future. Let us explore how them!"
            />
            <Article
              imgUrl={blog03}
              date="April 18, 2022"
              title="GPT-3 and Open AI are the future. Let us explore how them!"
            />
            <Article
              imgUrl={blog04}
              date="April 18, 2022"
              title="GPT-3 and Open AI are the future. Let us explore how them!"
            />
            <Article
              imgUrl={blog05}
              date="April 18, 2022"
              title="GPT-3 and Open AI are the future. Let us explore how them!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
