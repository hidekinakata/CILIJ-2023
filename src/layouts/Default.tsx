import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

type DefaultType = React.PropsWithChildren & {};

const Default: React.FC<DefaultType> = ({ children }) => {
  return (
    <div className={"min-h-screen"}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Default;
