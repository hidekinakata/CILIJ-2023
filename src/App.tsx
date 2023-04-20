import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import ScrollContainer from "./components/ScrollContainer";
import poster from "./assets/poster.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Default from "./layouts/Default";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route element={<Default />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="contact" element={<h1>Contato</h1>} />
          <Route path={"*"} element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
