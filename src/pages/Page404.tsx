import React from "react";
import { Link } from "react-router-dom";

type Page404Type = {};

const Page404: React.FC<Page404Type> = (props) => {
  return (
    <div
      className={"flex h-screen w-full flex-col items-center justify-center"}
    >
      <h1 className={"text-8xl"}>404</h1>
      <h2>Pagina não encontrada</h2>
      <Link to={"/"} className={"text-blue-600 underline underline-offset-1"}>
        Vá para página inicial
      </Link>
    </div>
  );
};

export default Page404;
