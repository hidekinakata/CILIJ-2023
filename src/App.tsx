import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Default from "./layouts/Default";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import EixosTematicos from "./pages/EixosTematicos";
import CompleteSchedule from "./pages/CompleteSchedule";
import Guidelines from "./pages/Guidelines";
import ThiagoTaubman from "./pages/ThiagoTaubman";
import Templates from "./pages/Templates";
import OrganizingCommittee from "./pages/OrganizingCommittee";
import Editoras from "./pages/Editoras";
import OuroPreto from "./pages/OuroPreto";
import Books from "./pages/Books";

function App() {
  return (
    <div className="App ">
      <HashRouter>
        <Routes>
          <Route element={<Default />}>
            <Route path="/" element={<Home />} />
            <Route path="/programacao" element={<CompleteSchedule />} />
            <Route path="/eixos" element={<EixosTematicos />} />
            <Route path="/orientacoes" element={<Guidelines />} />
            <Route path="/templates" element={<Templates />} />
            <Route path={"/thiago_taubman"} element={<ThiagoTaubman />} />
            <Route path="/comissoes" element={<OrganizingCommittee />} />
            <Route path="/editoras" element={<Editoras />} />
            <Route path="//lancamento_de_livros" element={<Books />} />
            <Route path="/ouro_preto" element={<OuroPreto />} />
          </Route>
          <Route path={"*"} element={<Page404 />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
