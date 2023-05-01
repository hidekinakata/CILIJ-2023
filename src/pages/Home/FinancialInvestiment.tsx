import React from "react";
import { Link } from "react-router-dom";

type FinancialInvestmentType = {};

const FinancialInvestment: React.FC<FinancialInvestmentType> = (props) => {
  return (
    <section
      id={"investimento"}
      className={
        "flex min-h-screen flex-col items-center justify-center px-4 pb-10 pt-10 text-justify leading-relaxed sm:px-32 md:pt-16 [&>p]:mb-4 [&>p]:indent-8"
      }
    >
      <h1 className={"mb-10 text-center text-4xl md:text-5xl"}>Investimento</h1>

      <div
        className={
          "relative grid h-fit grid-rows-3 gap-5 md:grid-cols-3 md:grid-rows-none [&>div]:h-72 [&>div]:w-full [&>div]:rounded-xl  [&>div]:shadow-md"
        }
      >
        <div className={"relative grid grid-rows-[min-content_auto]"}>
          <h1
            className={
              "flex h-36 items-center justify-center rounded-t-xl bg-fuel-yellow-500 p-3 text-center text-lg text-gray-100"
            }
          >
            Alunos de graduação e professores
            <br />
            (sem apresentação)
          </h1>
          <div className={"flex flex-col items-center justify-center"}>
            <h2 className={"text-3xl font-black text-gray-800"}>R$ 100,00</h2>
            <h3 className={"text-xl font-black text-gray-700"}>(cem reais)</h3>
          </div>
        </div>
        <div className={"relative grid grid-rows-[min-content_auto]"}>
          <h1
            className={
              "flex h-36 items-center justify-center rounded-t-xl bg-aubergine-500 p-3 text-center text-lg text-gray-100"
            }
          >
            Alunos de graduação com apresentação de poster
          </h1>
          <div className={"flex flex-col items-center justify-center"}>
            <h2 className={"text-3xl font-black text-gray-800"}>R$ 100,00</h2>
            <h3 className={"text-xl font-black text-gray-700"}>(cem reais)</h3>
          </div>
        </div>
        <div className={"relative grid grid-rows-[min-content_auto]"}>
          <h1
            className={
              "flex h-36 items-center justify-center rounded-t-xl bg-bermuda-500 p-3 text-center text-lg text-gray-100"
            }
          >
            Alunos de pós-graduação, professores, pesquisadores, bibliotecários
            com comunicação oral
          </h1>
          <div className={"flex flex-col items-center justify-center"}>
            <h2 className={"text-3xl font-black text-gray-800"}>R$ 150,00</h2>
            <h3 className={"text-xl font-black text-gray-700"}>
              (cento e cinquenta reais)
            </h3>
          </div>
        </div>
      </div>
      <Link
        to={"/orientacoes"}
        className={
          "mt-10 w-fit rounded bg-fuel-yellow-400 p-2 px-3 text-center text-xl text-gray-100"
        }
      >
        Veja as orientações para se inscrever clicando aqui
      </Link>
    </section>
  );
};

export default FinancialInvestment;
