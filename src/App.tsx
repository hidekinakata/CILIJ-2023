import React, { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import ScrollContainer from "./components/ScrollContainer";
import poster from "./assets/poster.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/Home/Header";
import About from "./pages/Home/About";
import Default from "./layouts/Default";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route element={<Default />}>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<h1>Contato</h1>} />
          </Route>
          <Route path={"*"} element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
