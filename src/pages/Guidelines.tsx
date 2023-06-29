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
        className={
          "my-8 text-center text-2xl font-semibold md:mb-12 md:text-5xl"
        }
      >
        Veja como se inscrever
      </h1>

      <section className={"w-full"}>
        <h1 className={"text-center text-xl font-semibold"}>
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
            e verifique o melhor eixo para o seu trabalho.
          </li>
          <li>
            Clique na aba{" "}
            <Link to={"/templates"} className={"text-red-500 hover:underline"}>
              templates
            </Link>
            , selecione o template resumo e escreva o seu resumo, seja para
            comunicação oral ou para poster -{" "}
            <strong>
              cada proponente pode escrever até 3 resumos com até três autores
            </strong>
            , sendo que{" "}
            <strong>
              todos devem fazer a inscrição para que seus nomes constem do
              caderno de resumos com ISBN e do e-book do evento.
            </strong>
            .
          </li>
          <li>
            Ao finalizar a escrita do seu resumo volte ao eixo escolhido e
            verifique o e-mail correspondente; depois envie o resumo feito no
            template para o email do seu eixo.{" "}
            <span className={""}>
              Exemplo: Se você escreveu sobre{" "}
              <strong>Literatura e ensino, eixo temático 6</strong>, você
              enviará o resumo para o email{" "}
              <span className={"underline"}>eixo6cilij@gmail.com</span>
            </span>
          </li>
          <li>
            <strong className={""}>
              Não se esqueça de utilizar no envio o seu email de fácil acesso.
            </strong>{" "}
            Agora, veja a seguir as orientações para o preenchimento do Google
            Forms.
          </li>
        </ol>
      </section>
      <section className={"w-full"}>
        <h1 className={"text-center text-xl font-semibold"}>
          Como fazer a minha inscrição?
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
          <li>Preencha o google forms;</li>
          <li>Complete todos os campos com as suas informações;</li>
          <li>
            Faça a sua inscrição escolhendo o campo: com ou sem apresentação de
            trabalho;
          </li>
          <li>
            Após o preenchimento da ficha de inscrição você deverá enviar um PIX
            ou efetuar um depósito bancário para:
            <ul className={"p-5"}>
              <table
                className={
                  "text-sm sm:text-base [&_td]:border-2 [&_td]:border-truegray-700 [&_td]:p-2"
                }
              >
                <thead>
                  <tr>
                    <td className={"font-bold"}>PIX</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Chave</td>
                    <td>33681335000171</td>
                  </tr>
                  <tr>
                    <td>Destinatário</td>
                    <td>Learned Language Idiomas</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <table
                className={
                  "text-sm sm:text-base [&_td]:border-2 [&_td]:border-truegray-700 [&_td]:p-2"
                }
              >
                <thead>
                  <tr>
                    <td className={"font-bold"}>Depósito bancário</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Agência</td>
                    <td>0001</td>
                  </tr>
                  <tr>
                    <td>Conta</td>
                    <td>2485491-2</td>
                  </tr>
                  <tr>
                    <td>Instituição</td>
                    <td>403 - Cora SCD</td>
                  </tr>
                  <tr>
                    <td>Nome da Empresa</td>
                    <td>Learned Language Idiomas</td>
                  </tr>
                  <tr>
                    <td>CNPJ</td>
                    <td>33681335000171</td>
                  </tr>
                </tbody>
              </table>
            </ul>
          </li>
          <li>
            Feito o pagamento envie o comprovante para o email:
            financeirocilij@gmail.com;
          </li>
          <li>
            Inscrição feita? Então, comece a preparar a mala, pois estamos te
            esperando com muita prosa boa, carinho e pão de queijo.
          </li>
        </ol>
        <table
          className={
            "mx-auto text-sm sm:text-base [&_td]:border-2 [&_td]:border-truegray-700 [&_td]:p-2"
          }
        >
          <caption className={"mb-3 text-xl font-semibold text-black"}>
            Datas importantes
          </caption>
          <tbody>
            <tr>
              <td>Inscrição para comunicação oral ou poster</td>
              <td className={"font-semibold"}>
                De 15 de maio a 16 de julho de 2023
              </td>
            </tr>
            <tr>
              <td>Análise dos resumos</td>
              <td className={"font-semibold"}>
                De 24 de julho a 10 de setembro de 2023
              </td>
            </tr>
            <tr>
              <td>Envio das cartas de aceite</td>
              <td className={"font-semibold"}>
                De 11 de setembro a 29 de setembro de 2023
              </td>
            </tr>
            <tr>
              <td>Envio do artigo completo para publicação em e-book</td>
              <td className={"font-semibold"}>
                De 20 de novembro a 10 de dezembro
              </td>
            </tr>
            <tr>
              <td>Publicação do e-book com ISBN data de 2024</td>
              <td className={"font-semibold"}>
                Dia 25 de março pelo site do congresso
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Guidelines;
