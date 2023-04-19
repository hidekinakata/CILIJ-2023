import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import ScrollContainer from "./components/ScrollContainer";

function App() {
  const maincontentRef = useRef(null);

  return (
    <div className="App min-h-screen ">
      <Navbar />
      <div className={"flex h-[200vh] flex-col justify-between"}>
        <span>a</span>
        <span>a</span>
        <span>a</span>
        <span>a</span>
      </div>
    </div>
  );
}

export default App;
