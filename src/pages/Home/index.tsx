import React from "react";
import Header from "./Header";
import About from "./About";
import Schedule from "./Schedule";
import FinancialInvestment from "./FinancialInvestiment";

type IndexType = {};

const Home: React.FC<IndexType> = (props) => {
  return (
    <>
      <Header />
      <About />
      <FinancialInvestment />
      <Schedule />
    </>
  );
};

export default Home;
