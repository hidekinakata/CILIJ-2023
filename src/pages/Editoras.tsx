import React from "react";

type EditorasType = {};

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
      <div className={"flex h-72 items-center"}>
        <h1 className={"text-2xl"}>Em construção</h1>
      </div>
    </main>
  );
};

export default Editoras;
