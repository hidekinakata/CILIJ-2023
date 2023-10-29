import React from "react";

type EditorasType = {};

const EDITORAS: { nome: string; url: string }[] = [
  { nome: "Aletria", url: "/editoras/Aletria.webp" },
  { nome: "Cora", url: "/editoras/Cora.jpg" },
  { nome: "Educação Literária", url: "/editoras/Educacao_literaria.png" },
  { nome: "EIS editora", url: "/editoras/EIS editora.jpg" },
  { nome: "Fino Traço", url: "/editoras/Fino_traco.webp" },
  { nome: "Francesinha", url: "/editoras/Francesinha.png" },
  { nome: "Jujuba", url: "/editoras/jUJUBA.png" },
  { nome: "Livros da Matriz", url: "/editoras/Livros_da_Matriz.png" },
  { nome: "MRN Editora", url: "/editoras/MRN editora.png" },
  { nome: "ôZé", url: "/editoras/Oze.png" },
];

const Editoras: React.FC<EditorasType> = (props) => {
  return (
    <main
      className={
        "relative flex min-h-screen flex-col items-center gap-10 px-4 pb-10 pt-32 sm:px-32 md:pt-44"
      }
    >
      <h1
        className={
          "my-8 text-center text-2xl font-semibold md:mb-12 md:text-5xl"
        }
      >
        Editoras
      </h1>
      <div className={"flex flex-wrap items-center justify-center "}>
        {EDITORAS.map((editora) => (
          <div className="relative mb-10 grid  h-[150px] w-[150px]  justify-center  md:h-[250px] md:w-[250px]">
            <img
              className={"h-[100px] object-contain md:h-[200px]"}
              src={editora.url}
            />
            <span className="text-center font-medium">{editora.nome}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

const Img = ({
  src,
  classname,
  href,
  text,
  textClassName,
}: {
  src: string;
  classname?: string;
  href?: string;
  text?: string;
  textClassName?: string;
}) => (
  <a
    href={href ?? "#/"}
    target={href ? "_blank" : ""}
    className={" relative transition hover:scale-110 " + classname}
  >
    {text ? <h1 className={textClassName}>{text}</h1> : null}
  </a>
);

export default Editoras;
