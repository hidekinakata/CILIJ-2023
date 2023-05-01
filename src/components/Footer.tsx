import React from "react";
import { BiCopyright } from "react-icons/bi";

type FooterType = {};

const Footer: React.FC<FooterType> = (props) => {
  return (
    <footer
      className={
        "mt-auto flex h-fit w-full flex-col items-center font-medium text-white"
      }
    >
      <div className={"p-5 md:px-32"}>
        <h1 className={"mb-8 text-center text-3xl font-black text-black"}>
          Apoio
        </h1>
        <div className={"flex flex-wrap items-center justify-center gap-5"}>
          <Img src={"/support/Logo grupo de pesquisa.png"} />
          <Img src={"/support/UFOP_logo_educação_reduzida.png"} />
          <Img src={"/support/Logo_posletras_900_px_x_150_px_1_01.png"} />
          <Img src={"/support/PPGE FCT.png"} />
          <Img src={"/support/Logomarca_jpg_UFOP.jpg"} />
          <Img src={"/support/logo_portal_unesp_4x3.jpg"} />
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
