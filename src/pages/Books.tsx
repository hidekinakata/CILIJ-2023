import React from "react";

type BooksType = {};

const Books: React.FC<BooksType> = (props) => {
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
        Lançamento de Livros
      </h1>
      <div className={"flex h-72 flex-col"}>
        <p>Olá congressista!</p>
        <p>Olá autor!</p>
        <p>Olá editor!</p>
        <p className={"mt-6 text-justify indent-4"}>
          Se você tem um livro de literatura infantil e juvenil ou algum livro
          teórico para lançar no VII Congresso Internacional de Literatura
          Infantil e Juvenil - teremos a noite do dia 07/12/2023 reservada para
          isso. Por favor, preencha o Forms e prepare seus livros. Estamos te
          esperando.
        </p>
        <div className={"grid place-items-center"}>
          <a
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLScvkHFzyEgT1NlVmoul9UKwXPjWWZAqezIatvST7HrqrGzPZA/viewform?usp=sf_link"
            }
            target={"_blank"}
            className={"mt-20 rounded bg-bermuda-600 p-2 px-4 text-gray-200"}
          >
            Ir para o forms
          </a>
        </div>
      </div>
    </main>
  );
};

export default Books;
