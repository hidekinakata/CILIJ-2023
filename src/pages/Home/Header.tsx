import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import poster from "../../assets/poster_final.png";
import SubscribeBtn from "../../components/SubscribeBtn";
import AsyncImage from "../../components/AsyncImage";
import { Link } from "react-router-dom";

type HomeType = {};

const Header: React.FC<HomeType> = (props) => {
  return (
    <section
      className={
        "relative flex min-h-screen w-full items-center justify-center px-9 pt-32 lg:px-32"
      }
    >
      <div
        className={
          "flex h-fit flex-col-reverse items-center justify-center md:flex-row md:justify-start md:gap-20"
        }
      >
        <AnimatePresence>
          <motion.div
            initial={{
              x: -50,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              staggerChildren: 0.2,
              delayChildren: 0.2,
            }}
            className={
              "mt-6 flex h-full flex-col justify-center text-center md:mt-0 md:justify-start md:text-left"
            }
          >
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className={
                "grid grid-cols-[min-content_auto] grid-rows-2 gap-x-2 gap-y-1 align-middle text-lg leading-none"
              }
            >
              <div
                className={"row-span-2 h-fit self-center text-pine-glade-600"}
              >
                <span
                  className={
                    " float-left h-full place-self-center text-5xl leading-none  "
                  }
                >
                  VII
                </span>
              </div>
              <p className={"self-end text-pine-glade-600"}>
                Congresso Internacional de
              </p>
              <p className={"text-pine-glade-600"}>
                Literatura Infantil e Juvenil
              </p>
            </motion.h3>
            <motion.h1
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className={
                "text-3xl font-semibold  md:max-w-screen-sm md:text-4xl lg:text-6xl"
              }
            >
              Educação literária:
              <motion.span className={"block font-['Caveat'] text-red-700"}>
                Mudanças em movimento
              </motion.span>
            </motion.h1>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className={"mt-10 w-fit self-center md:self-start"}
            >
              <SubscribeBtn />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{
            x: 50,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className={"grid place-items-center rounded-xl "}
        >
          <figure
            className={
              "float-left flex w-[15rem] flex-col justify-center md:place-self-start lg:w-[17.1rem]"
            }
          >
            <div
              className={
                "relative h-[21rem] w-[15rem] lg:h-[24rem] lg:w-[17.1rem]"
              }
            >
              <img
                src={poster}
                className={
                  "h-[21rem] w-[15rem] rounded-xl object-cover drop-shadow-md  lg:h-[24rem] lg:w-[17.1rem]"
                }
              />

              <div
                className={
                  "absolute bottom-5 right-0 grid h-24 w-24 translate-x-1/2 place-items-center rounded-full bg-fuel-yellow-400 p-3 pt-4 text-center text-xs font-semibold drop-shadow-lg"
                }
              >
                De 06 a 08 de dezembro de 2023
              </div>
            </div>
            <figcaption className={"mt-2 text-center"}>
              <Link
                to={"/thiago_taubman"}
                className={
                  "text-black transition duration-300 hover:text-fuel-yellow-400"
                }
              >
                <h1>Arte: Thiago Taubman</h1>
                <span className={"text-xs"}>
                  (Clique e saiba mais sobre o ilustrador)
                </span>
              </Link>
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
