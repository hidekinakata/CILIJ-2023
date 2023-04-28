import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import poster from "../../assets/poster.png";
import SubscribeBtn from "../../components/SubscribeBtn";
import AsyncImage from "../../components/AsyncImage";

type HomeType = {};

const Header: React.FC<HomeType> = (props) => {
  return (
    <section
      className={
        "relative flex min-h-screen w-full items-center justify-center px-12 pt-20 lg:px-32"
      }
      // style={{
      //   background: `linear-gradient(90deg, rgba(255,255,255,1) 44%, rgba(255,255,255,0) 100%), url(${poster})`,
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "auto 180vh",
      //   backgroundPosition: "right",
      // }}
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
              <span
                className={
                  "row-span-2 float-left h-full place-self-center text-5xl text-red-800 "
                }
              >
                VII
              </span>
              <p className={"self-end"}>Congresso Internacional de</p>
              <p className={"text-red-800"}>Literatura Infantil e Juvenil</p>
            </motion.h3>
            <motion.h1
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className={"text-3xl font-black md:max-w-screen-sm md:text-6xl "}
            >
              Educação literária:
              <span className={"font-['Caveat'] text-red-700"}>
                <br />
                Mudanças em movimento
              </span>
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
          className={
            "max-h-[40vh] max-w-full rounded-xl shadow-md shadow-black/50 md:max-h-[55vh]"
          }
        >
          <AsyncImage
            className={"max-h-[40vh] w-full  rounded-xl md:max-h-[55vh]"}
            src={poster}
            alt={"Event Poster"}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
