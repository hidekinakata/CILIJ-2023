import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Default from "./layouts/Default";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import EixosTematicos from "./pages/EixosTematicos";
import CompleteSchedule from "./pages/CompleteSchedule";

function App() {
  return (
    <div className="App ">
      <HashRouter>
        <Routes>
          <Route element={<Default />}>
            <Route path="/" element={<Home />} />
            <Route path="/programacao" element={<CompleteSchedule />} />
            <Route path="/eixos" element={<EixosTematicos />} />
            <Route path="/contact" element={<h1>Contato</h1>} />
          </Route>
          <Route path={"*"} element={<Page404 />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
