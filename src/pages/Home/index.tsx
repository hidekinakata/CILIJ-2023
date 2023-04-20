import React from "react";
import Header from "./Header";
import About from "./About";
import Schedule from "./Schedule";

type IndexType = {};

const Home: React.FC<IndexType> = (props) => {
  return (
    <>
      <Header />
      <About />
      <Schedule />
    </>
  );
};

export default Home;
