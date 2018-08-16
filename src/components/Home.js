import React from "react";
import MarkdownViewWrapper from "./../containers/MarkdownViewWrapper"

const markdownurl =
  "https://raw.githubusercontent.com/muitool/ghw-menu/master/README.md"

const Home = () => (
  <div>
    <h2>Home</h2>
    <MarkdownViewWrapper view={markdownurl} />
  </div>
);

export default Home;
