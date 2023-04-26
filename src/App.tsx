import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Default from "./layouts/Default";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App ">
      <BrowserRouter basename={"/"}>
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
