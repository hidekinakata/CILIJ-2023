import React from "react";
import { BiCopyright } from "react-icons/bi";

type FooterType = {};

const Footer: React.FC<FooterType> = (props) => {
  return (
    <footer
      className={
        "mt-auto flex h-fit w-full flex-col items-center border-t-2 font-medium text-white"
      }
    >
      <div className={"p-5 md:px-32"}>
        <h1 className={"mb-8 text-center text-3xl font-bold text-black"}>
          Apoio
        </h1>
        <div className={"flex flex-wrap items-center justify-center gap-5"}>
          <div className={"relative"}>
            <Img src={"/support/Logo grupo de pesquisa.png"} />
            <span
              className={
                "absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl font-black text-black lg:bottom-5 lg:text-4xl"
              }
            >
              PROLELI
            </span>
          </div>
          <div className={"relative px-12 pb-16"}>
            <Img src={"/support/UFOP_logo_educação_reduzida.png"} />
            <h1
              className={
                "absolute bottom-0 left-1/2 w-3/4 -translate-x-1/2 text-center text-sm font-black text-black lg:bottom-5 lg:text-sm"
              }
            >
              Programa de pós-graduação em Educação UFOP
            </h1>
          </div>
          <div className={"relative"}>
            <Img src={"/support/logo_polestras.jpeg"} />
            <h1
              className={
                "absolute bottom-1 left-1/2 -translate-x-1/2 text-center text-[0.55rem] font-black text-white lg:bottom-2 lg:text-[1.1rem]"
              }
            >
              POSLETRAS/UFOP
            </h1>
          </div>

          <Img src={"/support/PPGE FCT.png"} />
          <Img src={"/support/Logomarca_jpg_UFOP.jpg"} />
          <Img src={"/support/logo_portal_unesp_4x3.jpg"} />
          <Img src={"/support/learned_language.png"} />
        </div>
      </div>
      <div
        className={
          "flex h-16 w-full items-center justify-center gap-2  whitespace-pre-wrap bg-aubergine-900"
        }
      >
        <p className={"flex items-center justify-center gap-1"}>
          Copyright
          <span className={"whitespace-nowrap"}>
            <BiCopyright />
          </span>
          2023.
        </p>
        <p className={"  text-center"}>Todos diretos reservados</p>
      </div>
    </footer>
  );
};

const Img = ({ src }: { src: string }) => (
  <img className={"h-24 w-24 object-scale-down md:h-48 md:w-48"} src={src} />
);

export default Footer;
