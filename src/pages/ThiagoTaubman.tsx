import React from "react";
import { Link } from "react-router-dom";
import illustration from "../assets/poster.jpg";

type ThiagoTaubmanType = {};

const ThiagoTaubman: React.FC<ThiagoTaubmanType> = (props) => {
  return (
    <main
      className={
        "relative flex min-h-screen flex-col items-center gap-10 px-4 pb-10 pt-32 sm:px-32 md:pt-44"
      }
    >
      <h1 className={"text-center text-2xl"}>
        Conheça o autor da ilustração do nosso pôster
      </h1>

      <div>
        <h1 className={"mb-8 text-center text-2xl md:hidden"}>
          Thiago Taubman
        </h1>

        <section
          className={"flex flex-col items-center justify-center md:flex-row"}
        >
          <img
            src={illustration}
            className={"mb-8 h-[50vh] w-fit md:mb-0 md:mr-10"}
            alt={"ilustração"}
          />
          <p className={"text-justify indent-4"}>
            <h1
              className={"mb-8 hidden text-center indent-0 text-2xl md:block"}
            >
              Thiago Taubman
            </h1>
            Thiago Taubman, estudante de Desenho Industrial na Escola de Belas
            Artes (UFRJ). Se formou como técnico em multimídia pela NAVE Oi
            Futuro (Colégio Estadual José Leite Lopes) e é apaixonado por
            desenho e pintura desde a infância, graças ao incentivo de diversos
            professores e família, hoje segue uma carreira como ilustrador,
            atuando em diversos projetos, onde tenta sempre colocar algo de novo
            e único.
          </p>
        </section>
      </div>

      <Link to={"/"} className={"text-lg font-black underline"}>
        Voltar para Home
      </Link>
    </main>
  );
};

export default ThiagoTaubman;
