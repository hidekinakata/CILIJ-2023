import React from "react";
import { Link } from "react-router-dom";

type GuidelinesType = {};

const Guidelines: React.FC<GuidelinesType> = (props) => {
  return (
    <main
      className={
        "relative flex min-h-screen flex-col items-center gap-10 px-4 pb-10 pt-32 sm:px-32 md:pt-44"
      }
    >
      <h1
        className={"my-8 text-center text-2xl font-black md:mb-12 md:text-5xl"}
      >
        Veja como se inscrever
      </h1>

      <section>
        <h1 className={"text-center text-xl font-black"}>
          Como inscrever comunicação oral ou poster no VII Congresso
          Internacional de Literatura Infantil e Juvenil?
        </h1>

        <ol
          className={
            "flex list-inside list-decimal flex-col gap-5 p-5 text-justify"
          }
        >
          <li>
            Clique na aba{" "}
            <Link to={"/eixos"} className={"text-red-500 hover:underline"}>
              eixos temáticos
            </Link>{" "}
            e verifique o melhor eixo para seu trabalho.
          </li>
          <li>
            Clique na aba templates, selecione template resumo e faça seu
            resumo, seja para comunicação oral ou para poster -{" "}
            <strong>
              cada proponente pode escrever até 3 resumos com até três autores
            </strong>
            , sendo que{" "}
            <strong>
              todos devem fazer a inscrição para que seus nomes constem do
              caderno de resumos com ISBN e do e-book do evento
            </strong>
            .
          </li>
          <li>
            Finalizado o resumo volte ao eixo e verifique o e-mail de seu tema,
            depois envie o resumo feito no template para o email do eixo.{" "}
            <span className={"text-aubergine-900"}>
              Exemplo: Se você escreveu sobre{" "}
              <span className={"font-black italic"}>
                Literatura e ensino, eixo temático 6
              </span>
              , você enviará o resumo para o email:{" "}
              <span className={"underline"}>eixo6cilij@gmail.com</span>
            </span>
          </li>
          <li>
            Eviado o resumo, agora é só aguardar sua carta de aceite.{" "}
            <strong className={"text-aubergine-700"}>
              Não se esqueça de utilizar no envio o seu email que mais acessa.
            </strong>
          </li>
        </ol>
      </section>

      <section>
        <h1 className={"text-center text-xl font-black"}>
          Tive meu resumo aprovado, quero participar do congresso e quero ir
          para Ouro Preto, como fazer minha inscrição?
        </h1>

        <ol
          className={
            "flex list-inside list-decimal flex-col gap-5 p-5 text-justify"
          }
        >
          <li>
            Clique na{" "}
            <Link to={"/"} className={"text-red-500 hover:underline"}>
              página incial
            </Link>{" "}
            do congresso: Faça sua inscrição
          </li>
          <li>Preencha o google forms</li>
          <li>Complete todos os campos com suas informações</li>
          <li>
            Faça sua inscrição escolhendo o campo: com ou sem apresentação de
            trabalho
          </li>
          <li>
            Preenchida a ficha de inscrição agora você deverá encaminhar um pix
            ou fazer um depósito bancário para: xxxx
          </li>
          <li>
            Feito o pagamento envie o comprovante para o email:
            financeirocilij@gmail.com
          </li>
          <li>
            Inscrição feita!?!?!? Comece a preparar a mala, pois te esperamos
            com muita prosa boa, muito carinho e pão de queijo.
          </li>
        </ol>
        <table
          className={
            "mx-auto text-sm sm:text-base [&_td]:border-2 [&_td]:border-truegray-700 [&_td]:p-2"
          }
        >
          <caption className={"mb-3 text-xl font-black text-black"}>
            Datas importantes
          </caption>
          <tbody>
            <tr>
              <td>Inscrição para comunicação oral ou poster</td>
              <td>De 15 de maio a 16 de julho de 2023</td>
            </tr>
            <tr>
              <td>Análise dos resumos</td>
              <td>De 24 de julho a 10 de setembro de 2023</td>
            </tr>
            <tr>
              <td>Envio das cartas de aceite</td>
              <td>De 11 de setembro a 29 de setembro de 2023</td>
            </tr>
            <tr>
              <td>Envio do artigo completo para publicação em e-book</td>
              <td>De 20 de novembro a 10 de dezembro</td>
            </tr>
            <tr>
              <td>Publicação do e-book com ISBN data de 2024</td>
              <td>Dia 25 de março pelo site do congresso</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Guidelines;
