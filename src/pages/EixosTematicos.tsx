import { motion } from "framer-motion";
import React, { useState } from "react";
import Eixos from "../data/eixos_data";
import { HashLink } from "react-router-hash-link";

type EixosTematicosType = {};

const EixosTematicos: React.FC<EixosTematicosType> = (props) => {
  const [showMenuEixos, setShowMenuEixos] = useState(false);

  function unsecuredCopyToClipboard(el: HTMLElement, text: string) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    el.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    el.removeChild(textArea);
  }

  return (
    <main
      className={
        "flex min-h-screen flex-col px-4  pb-10 pt-32 sm:px-32 md:pt-44"
      }
    >
      <div
        className={
          " h-full w-full grow gap-5 lg:grid lg:grid-cols-[min(30%,15rem)_auto]"
        }
      >
        <div className={"fixed bottom-5 right-5 lg:hidden"}>
          <motion.nav
            variants={{
              hidden: {
                x: "-50%",
                y: "-90%",
                opacity: 0,
                display: "none",
                transition: {
                  display: {
                    delay: 0.3,
                  },
                },
              },
              show: {
                x: "-50%",
                y: "-105%",
                opacity: 1,
                display: "block",
              },
            }}
            transition={{
              ease: "easeInOut",
            }}
            initial={"hidden"}
            animate={showMenuEixos ? "show" : "hidden"}
            className={
              "absolute left-1/2 top-0 h-fit w-fit border-r-2 bg-fuel-yellow-200 p-2 "
            }
          >
            <ul className={"flex h-auto flex-col gap-1"}>
              {Eixos.map((eixo) => (
                <li
                  key={eixo.eixo}
                  className={
                    "h-10 w-auto cursor-pointer  overflow-hidden overflow-ellipsis whitespace-nowrap rounded-lg transition duration-500 hover:bg-fuel-yellow-500"
                  }
                >
                  <HashLink
                    className={"grid h-full w-full place-items-center px-3"}
                    onClick={() => setShowMenuEixos(false)}
                    to={"#eixo" + eixo.eixo}
                  >
                    Eixo {eixo.eixo}
                  </HashLink>
                </li>
              ))}
            </ul>
          </motion.nav>
          <button
            className={
              " h-16 w-16 rounded-full bg-fuel-yellow-500 font-bold text-white"
            }
            onClick={() => setShowMenuEixos((show) => !show)}
          >
            Eixos
          </button>
        </div>
        <nav
          className={
            "sticky top-36 hidden h-fit w-full border-r-2 p-2 lg:block"
          }
        >
          <ul className={"flex flex-col gap-3"}>
            {Eixos.map((eixo) => (
              <li
                key={eixo.eixo}
                className={
                  " h-fit w-auto cursor-pointer overflow-hidden overflow-ellipsis whitespace-nowrap rounded-lg  transition duration-500 hover:bg-fuel-yellow-500"
                }
              >
                <HashLink
                  to={"#eixo" + eixo.eixo}
                  className={
                    "block w-full overflow-hidden overflow-ellipsis whitespace-nowrap p-2"
                  }
                >
                  Eixo {eixo.eixo}: {eixo.title}
                </HashLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={"h-full w-full"}>
          <h1 className={"text-center text-4xl md:text-5xl"}>
            Eixos temáticos
          </h1>
          {Eixos.map((eixo) => (
            <section
              id={"eixo" + eixo.eixo}
              key={eixo.eixo}
              className={"pt-24"}
            >
              <h1 className={"text-center text-3xl"}>Eixo {eixo.eixo}</h1>

              <h1 className={"mb-5 text-center text-3xl"}>{eixo.title}</h1>
              <div className={"flex items-center justify-center gap-5"}>
                <span className={"h-[1px] w-full bg-truegray-300"} />
                <span className={"h-1 w-2  rounded-full bg-truegray-300"} />
                <span className={"h-[1px] w-full bg-truegray-300"} />
              </div>
              <br />
              <h2 className={""}>
                Informações no email:{" "}
                <a
                  className={"text-blue-600 underline "}
                  href={"mailto:" + eixo.email}
                >
                  {eixo.email}
                </a>{" "}
                <button
                  className={"rounded bg-fuel-yellow-200 p-1 text-xs"}
                  onClick={async (e) => {
                    if (navigator.clipboard) {
                      const target = e.currentTarget;
                      await navigator.clipboard
                        .writeText(eixo.email)
                        .then(() => (target.innerHTML = "Email copiado!"));
                      return;
                    }
                    unsecuredCopyToClipboard(e.currentTarget, eixo.email);
                    e.currentTarget.innerHTML = "Email copiado!";
                  }}
                >
                  Copiar Email
                </button>
              </h2>
              <br />
              <h2>
                <strong>Apresentadores</strong>: {eixo.presenters.join(", ")}
              </h2>
              <br />
              <p className={"text-justify indent-4"}>{eixo.resume}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default EixosTematicos;
